import type { Repository } from '@/services/github';
import { ProjectEntry } from '@/features/projects-grid';

interface ProjectsPageClientProps {
  repos: Repository[];
}

export function ProjectsPageClient({ repos }: ProjectsPageClientProps) {
  return (
    <div className="wrap section-y">
      <h1 className="mb-2 text-[clamp(24px,3vw,34px)]">Все проекты</h1>
      <p className="mb-10 max-w-[52ch] text-muted">
        Закреплённые репозитории на GitHub: что делает каждая система и чем её можно проверить.
      </p>

      <div className="max-w-[75ch]">
        {repos.map((repo, index) => (
          <ProjectEntry key={repo.name} repo={repo} index={index} />
        ))}
      </div>
    </div>
  );
}
