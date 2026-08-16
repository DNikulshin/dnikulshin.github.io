import { fetchPinnedRepos } from '@/services/github';
import { ProjectsGridPresenter } from './projects-grid-presenter';

export async function ProjectsGrid() {
  const repos = await fetchPinnedRepos();
  return (
    <section id="projects">
      <ProjectsGridPresenter repos={repos} />
    </section>
  );
}
