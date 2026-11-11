import { serverEnv } from '@/shared/config/server-env';
import { PINNED_REPOS_QUERY } from './_queries';
import { RepositorySchema, type Repository } from './_types';
import { FALLBACK_PROJECTS } from './fallback-projects';

import { GITHUB_LOGIN, orderRepos } from './_order';

const MAX_RETRIES = 3;
const INITIAL_DELAY = 1000;

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = MAX_RETRIES,
  delay = INITIAL_DELAY
): Promise<Response> {
  try {
    const res = await fetch(url, options);
    if (res.ok) return res;
    if (retries === 0) return res;
    // Ждём и повторяем
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}

export async function fetchPinnedRepos(): Promise<Repository[]> {
  try {
    const res = await fetchWithRetry(
      'https://api.github.com/graphql',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${serverEnv.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: PINNED_REPOS_QUERY,
          variables: { owner: GITHUB_LOGIN },
        }),
      },
      MAX_RETRIES
    );

    if (!res.ok) {
      console.warn(`GitHub API error: ${res.status}. Using fallback data.`);
      return FALLBACK_PROJECTS;
    }

    const json = await res.json();
    const user = json.data?.user;
    const pinned: unknown[] = user?.pinnedItems?.nodes ?? [];
    const extra: unknown[] = user?.pcRemote ? [user.pcRemote] : [];

    const byName = new Map<string, Repository>();
    for (const raw of [...pinned, ...extra]) {
      if (!raw) continue;
      const repo = RepositorySchema.parse(raw);
      byName.set(repo.name, repo);
    }

    const repos = orderRepos([...byName.values()]);
    if (repos.length === 0) {
      console.warn('No repos found. Using fallback data.');
      return FALLBACK_PROJECTS;
    }
    return repos;
  } catch (error) {
    console.warn('Failed to fetch pinned repos:', error);
    console.warn('Using fallback data.');
    return FALLBACK_PROJECTS;
  }
}
