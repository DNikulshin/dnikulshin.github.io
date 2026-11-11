import type { Repository } from './_types';

export const GITHUB_LOGIN = 'DNikulshin';

/**
 * Порядок карточек задаёт редакция, а не настройка закреплённых репозиториев:
 * сначала то, что показывает диапазон, потом остальное в исходном порядке.
 */
export const PROJECT_ORDER = [
  'corporate-transport',
  'docbrain',
  'pc-remote',
  'support-ticketing-system',
  'scan-agent',
];

export function orderRepos(repos: Repository[]): Repository[] {
  const rank = (name: string) => {
    const i = PROJECT_ORDER.indexOf(name);
    return i === -1 ? PROJECT_ORDER.length : i;
  };
  return [...repos].sort((a, b) => rank(a.name) - rank(b.name));
}
