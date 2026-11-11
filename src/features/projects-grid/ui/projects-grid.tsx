import { fetchPinnedRepos } from '@/services/github';
import { ProjectsList } from './projects-list';

export async function ProjectsGrid() {
  const repos = await fetchPinnedRepos();
  return <ProjectsList repos={repos} />;
}
