import { fetchPinnedRepos } from '@/services/github/client';
import { ProjectsGridPresenter } from './projects-grid-presenter';

export async function ProjectsGrid() {
  const repos = await fetchPinnedRepos();
  return <ProjectsGridPresenter repos={repos} />;
}
