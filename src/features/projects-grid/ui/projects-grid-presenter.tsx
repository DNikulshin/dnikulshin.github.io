'use client';

import { ProjectCard } from './project-card';
import { PROJECTS_TITLE, PROJECTS_SUBTITLE } from '../lib/_constants';
import type { Repository } from '@/services/github/_types';

interface ProjectsGridPresenterProps {
  repos: Repository[];
  limit?: number;
}

export function ProjectsGridPresenter({ repos, limit = 6 }: ProjectsGridPresenterProps) {
  const displayedRepos = repos.slice(0, limit);

  if (!displayedRepos.length) {
    return (
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-gray-400">Нет закреплённых проектов</div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">{PROJECTS_TITLE}</h2>
        <p className="text-center text-gray-400 mb-12">{PROJECTS_SUBTITLE}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRepos.map((repo, index) => (
            <ProjectCard key={repo.name} repo={repo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
