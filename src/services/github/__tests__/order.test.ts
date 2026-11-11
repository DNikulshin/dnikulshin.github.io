import { orderRepos, PROJECT_ORDER } from '../_order';
import type { Repository } from '../_types';

function repo(name: string): Repository {
  return {
    name,
    description: null,
    url: `https://github.com/DNikulshin/${name}`,
    stargazerCount: 0,
    forkCount: 0,
    primaryLanguage: null,
    updatedAt: '2025-01-01T00:00:00Z',
    repositoryTopics: { nodes: [] },
  };
}

describe('orderRepos', () => {
  it('ставит проекты в редакционном порядке, а не в порядке API', () => {
    const input = ['scan-agent', 'unknown-repo', 'docbrain', 'corporate-transport'].map(repo);
    expect(orderRepos(input).map((r) => r.name)).toEqual([
      'corporate-transport',
      'docbrain',
      'scan-agent',
      'unknown-repo',
    ]);
  });

  it('не теряет проекты, которых нет в списке порядка', () => {
    const input = ['a', 'b', 'c'].map(repo);
    expect(orderRepos(input)).toHaveLength(3);
  });

  it('не мутирует входной массив', () => {
    const input = ['docbrain', 'corporate-transport'].map(repo);
    orderRepos(input);
    expect(input.map((r) => r.name)).toEqual(['docbrain', 'corporate-transport']);
  });

  it('список порядка не содержит дублей', () => {
    expect(new Set(PROJECT_ORDER).size).toBe(PROJECT_ORDER.length);
  });
});
