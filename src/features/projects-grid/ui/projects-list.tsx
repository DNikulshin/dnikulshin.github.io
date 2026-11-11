import type { Repository } from '@/services/github';
import { EXTRA_PROJECTS, PROJECTS_EMPTY, PROJECTS_KICKER, PROJECTS_TITLE } from '../lib/_content';
import { ProjectEntry } from './project-entry';

interface ProjectsListProps {
  repos: Repository[];
  /** Сколько записей показывать с полным разбором. Остальные — строкой. */
  limit?: number;
  showExtras?: boolean;
}

export function ProjectsList({ repos, limit = 5, showExtras = true }: ProjectsListProps) {
  if (!repos.length) {
    return (
      <section id="projects" className="wrap section-y border-t border-rule">
        <p className="text-muted">{PROJECTS_EMPTY}</p>
      </section>
    );
  }

  const detailed = repos.slice(0, limit);
  const shownNames = new Set(detailed.map((repo) => repo.name));
  const extras = EXTRA_PROJECTS.filter(({ name }) => !shownNames.has(name));

  return (
    <section id="projects" className="wrap section-y border-t border-rule">
      <h2 className="mb-[clamp(24px,3vw,36px)] text-[clamp(19px,2.2vw,26px)]">{PROJECTS_TITLE}</h2>

      <div className="grid gap-4 md:grid-cols-[minmax(120px,168px)_minmax(0,1fr)] md:gap-12">
        <p className="text-[13px] text-muted md:pt-1.5">
          {PROJECTS_KICKER.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div>
          {detailed.map((repo, index) => (
            <ProjectEntry key={repo.name} repo={repo} index={index} />
          ))}

          {showExtras && extras.length > 0 && (
            <ul className="mt-6 border-t border-rule">
              {extras.map(({ name, note }) => (
                <li
                  key={name}
                  className="flex flex-col gap-x-4 border-b border-rule py-3 text-[15px] sm:flex-row"
                >
                  <b className="font-semibold sm:w-48 sm:shrink-0">{name}</b>
                  <span className="text-muted">{note}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
