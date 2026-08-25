/**
 * Client-side fetch of live repository metadata (stars + last update date).
 * Uses public GitHub REST API — no token required for public repos.
 * Rate limit: 60 req/hour unauthenticated. Safe with React Query caching.
 */

const GITHUB_OWNER = 'DNikulshin';

export interface LiveRepoMeta {
  stargazerCount: number;
  /** ISO 8601 string, corresponds to GraphQL `updatedAt` */
  updatedAt: string;
}

/** Кастомная ошибка rate limit — React Query её не будет ретраить */
export class GitHubRateLimitError extends Error {
  constructor(
    message: string,
    public readonly resetAt?: number // unix ms timestamp
  ) {
    super(message);
    this.name = 'GitHubRateLimitError';
  }
}

export async function fetchRepoMeta(repoName: string): Promise<LiveRepoMeta> {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${repoName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    cache: 'no-store',
  });

  // Rate limit (GitHub иногда отдаёт 403 вместо 429)
  if (res.status === 403 || res.status === 429) {
    const resetHeader = res.headers.get('X-RateLimit-Reset');
    const resetAt = resetHeader ? Number(resetHeader) * 1000 : undefined;
    throw new GitHubRateLimitError(`GitHub rate limit exceeded for ${repoName}`, resetAt);
  }

  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${repoName}`);
  }

  const data = (await res.json()) as {
    stargazers_count?: number;
    updated_at?: string;
  };

  return {
    stargazerCount: data.stargazers_count ?? 0,
    updatedAt: data.updated_at ?? '',
  };
}

/**
 * Parallel batch fetch for multiple repositories.
 * - Успешные репо попадают в map
 * - Отдельные ошибки (404, сеть) игнорируются
 * - Если ВСЕ упали из-за rate limit — пробрасываем GitHubRateLimitError
 */
export async function fetchReposMeta(repoNames: string[]): Promise<Record<string, LiveRepoMeta>> {
  const results = await Promise.allSettled(
    repoNames.map(async (name) => {
      const meta = await fetchRepoMeta(name);
      return [name, meta] as const;
    })
  );

  const map: Record<string, LiveRepoMeta> = {};
  let rateLimitHit = false;
  let resetAt: number | undefined;

  for (const result of results) {
    if (result.status === 'fulfilled') {
      const [name, meta] = result.value;
      map[name] = meta;
    } else if (result.reason instanceof GitHubRateLimitError) {
      rateLimitHit = true;
      resetAt = result.reason.resetAt ?? resetAt;
    }
    // остальные ошибки (404, сеть) просто пропускаем
  }

  // Ничего не получили и был rate limit → сигнализируем хуку
  if (Object.keys(map).length === 0 && rateLimitHit) {
    throw new GitHubRateLimitError('GitHub rate limit exceeded', resetAt);
  }

  return map;
}
