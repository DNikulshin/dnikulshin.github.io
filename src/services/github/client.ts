import { env } from '@/shared/config/env';
import { PINNED_REPOS_QUERY } from './_queries';
import { RepositorySchema, type Repository } from './_types';

export async function fetchPinnedRepos(): Promise<Repository[]> {
  if (!env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is not set in environment variables');
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const json = await res.json();
  const repos = json.data.user.pinnedItems.nodes;
  return repos.map((repo: unknown) => RepositorySchema.parse(repo));
}
