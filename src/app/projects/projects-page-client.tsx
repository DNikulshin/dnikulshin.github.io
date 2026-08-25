'use client';

import { ProjectCard } from '@/features/projects-grid/ui/project-card';
import { useLiveRepoMeta } from '@/features/projects-grid/model/_use-live-repo-meta';
import type { Repository } from '@/services/github';

interface ProjectsPageClientProps {
  repos: Repository[];
}

export function ProjectsPageClient({ repos }: ProjectsPageClientProps) {
  const repoNames = repos.map((r) => r.name);
  const initialMeta = Object.fromEntries(
    repos.map((r) => [r.name, { stargazerCount: r.stargazerCount, updatedAt: r.updatedAt }])
  );

  const { data: liveMetaMap } = useLiveRepoMeta(repoNames, initialMeta);

  return (
    <section className="py-12 px-4 min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Все проекты</h1>
        <p className="text-gray-400 mb-12">Закреплённые репозитории на GitHub</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => {
            const live = liveMetaMap?.[repo.name];
            return (
              <ProjectCard
                key={repo.name}
                repo={repo}
                index={index}
                liveStars={live?.stargazerCount}
                liveUpdatedAt={live?.updatedAt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
