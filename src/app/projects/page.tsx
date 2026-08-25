import { fetchPinnedRepos } from '@/services/github';
import { ProjectsJsonLd } from '@/features/json-ld/ui/projects-json-ld';
import { ProjectsPageClient } from './projects-page-client';

export default async function ProjectsPage() {
  const repos = await fetchPinnedRepos();

  return (
    <>
      <ProjectsJsonLd repos={repos} />
      <ProjectsPageClient repos={repos} />
    </>
  );
}
