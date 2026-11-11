import {
  HERO_ACTIONS,
  HERO_ASIDE,
  HERO_LEDE_BEFORE,
  HERO_LEDE_PROOF,
  HERO_TITLE,
} from '../lib/_constants';
import { SystemMap } from '@/features/system-map';
import { cn } from '@/shared/lib/css';

export function Hero() {
  return (
    <section className="wrap pt-[clamp(32px,6vw,76px)]">
      <h1 className="mb-[clamp(20px,3vw,34px)] max-w-[24ch] text-[clamp(27px,3.9vw,48px)]">
        {HERO_TITLE}
      </h1>

      <div className="grid items-end gap-6 pb-[clamp(24px,3.5vw,40px)] md:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] md:gap-10">
        <div>
          <p className="mb-7 max-w-[46ch] text-[clamp(16px,1.35vw,19px)] text-muted">
            {HERO_LEDE_BEFORE} <strong className="font-medium text-ink">{HERO_LEDE_PROOF}</strong>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {HERO_ACTIONS.map(({ href, label, variant }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  'inline-flex min-h-11 items-center px-5 text-[15px]',
                  variant === 'solid'
                    ? 'rounded-[2px] bg-ink font-medium text-sheet hover:bg-black'
                    : 'border-b border-rule pb-1 hover:border-ink'
                )}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <p className="border-t border-rule pt-3 text-[13.5px] text-muted md:border-t-0 md:border-l md:pt-0 md:pl-3.5">
          <strong className="mb-1 block font-medium text-ink">{HERO_ASIDE.label}</strong>
          {HERO_ASIDE.text}
        </p>
      </div>

      <SystemMap />
    </section>
  );
}
