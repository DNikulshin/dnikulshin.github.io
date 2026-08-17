import { fetchPinnedRepos } from '@/services/github';
import { ProjectCard } from '@/features/projects-grid/ui/project-card';
import { ProjectsJsonLd } from '@/features/json-ld/ui/projects-json-ld';

export default async function ProjectsPage() {
  const repos = await fetchPinnedRepos();

  return (
    <>
      <ProjectsJsonLd repos={repos} />
      <section className="py-12 px-4 min-h-screen bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Все проекты</h1>
          <p className="text-gray-400 mb-12">Закреплённые репозитории на GitHub</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <ProjectCard key={repo.name} repo={repo} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
