'use client';

import { ProjectCard } from './project-card';
import { PROJECTS_TITLE, PROJECTS_SUBTITLE } from '../lib/_constants';
import type { Repository } from '@/services/github/_types';

interface ProjectsGridClientProps {
  initialData: Repository[];
}

export function ProjectsGridClient({ initialData }: ProjectsGridClientProps) {
  const repos = initialData;

  if (!repos || repos.length === 0) {
    return (
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-gray-500">Нет закреплённых проектов</div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{PROJECTS_TITLE}</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">{PROJECTS_SUBTITLE}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 6).map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
