import { fetchPinnedRepos } from '../client';
import { RepositorySchema } from '../_types';

global.fetch = jest.fn();

const mockRepos = [
  {
    name: 'docbrain',
    description: 'AI-консультант',
    url: 'https://github.com/DNikulshin/docbrain',
    stargazerCount: 5,
    forkCount: 1,
    primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
    updatedAt: '2025-01-01T00:00:00Z',
    repositoryTopics: { nodes: [{ topic: { name: 'AI' } }] },
  },
];

describe('GitHub Service', () => {
  afterEach(() => jest.clearAllMocks());

  it('fetches pinned repos and validates schema', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        data: { user: { pinnedItems: { nodes: mockRepos } } },
      }),
    });

    const repos = await fetchPinnedRepos();
    expect(repos).toHaveLength(1);
    expect(repos[0].name).toBe('docbrain');
    expect(() => RepositorySchema.parse(repos[0])).not.toThrow();
  });

  it('throws on API error', async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false, status: 403 });
    await expect(fetchPinnedRepos()).rejects.toThrow('GitHub API error: 403');
  });
});
