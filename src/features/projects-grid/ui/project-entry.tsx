import type { Repository } from '@/services/github';
import { PROJECT_COPY } from '../lib/_content';

interface ProjectEntryProps {
  repo: Repository;
  index: number;
}

export function ProjectEntry({ repo, index }: ProjectEntryProps) {
  const copy = PROJECT_COPY[repo.name];
  const description = copy?.description ?? repo.description ?? 'Описание пока не написано.';

  return (
    <article className="border-t border-rule py-6 first:border-t-0 first:pt-0">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
        <span className="w-[2ch] text-[13px] text-muted">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="text-[clamp(19px,2.1vw,23px)] font-semibold tracking-[-0.01em]">
          <a href={repo.url} className="border-b border-transparent hover:border-ink">
            {repo.name}
          </a>
        </h3>
        {copy?.domain && (
          <span className="rounded-[2px] border border-signal px-[7px] py-px text-[13.5px] text-signal">
            {copy.domain}
          </span>
        )}
      </div>

      <p className="mb-3.5 max-w-[62ch] text-ink/85">{description}</p>

      <dl className="grid gap-x-6 gap-y-2 border-t border-dashed border-rule pt-3.5 sm:grid-cols-3">
        <div className="text-[13.5px]">
          <dt className="mb-0.5 text-[13px] text-muted">Стек</dt>
          <dd>{copy?.stack ?? repo.primaryLanguage?.name ?? '—'}</dd>
        </div>
        <div className="text-[13.5px]">
          <dt className="mb-0.5 text-[13px] text-muted">Чем проверено</dt>
          <dd>{copy?.proof ?? 'репозиторий на GitHub'}</dd>
        </div>
        <div className="text-[13.5px]">
          <dt className="mb-0.5 text-[13px] text-muted">Код</dt>
          <dd>
            <a
              href={repo.url}
              className="inline-flex min-h-8 items-center border-b border-rule hover:border-signal hover:text-signal"
            >
              github →
            </a>
          </dd>
        </div>
      </dl>
    </article>
  );
}
