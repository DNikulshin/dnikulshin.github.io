// import { useQuery } from '@tanstack/react-query';
// import { fetchPinnedRepos } from '@/services/github'; // теперь из index
// import type { Repository } from '@/services/github';

// export const projectsKeys = {
//   all: ['projects'] as const,
//   pinned: () => [...projectsKeys.all, 'pinned'] as const,
// };

// export function usePinnedProjects() {
//   return useQuery<Repository[]>({
//     queryKey: projectsKeys.pinned(),
//     queryFn: fetchPinnedRepos,
//     staleTime: 5 * 60 * 1000,
//   });
// }
