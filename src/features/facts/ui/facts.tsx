import { FACTS } from '../lib/_constants';
import { cn } from '@/shared/lib/css';

export function Facts() {
  return (
    <div className="border-y border-rule bg-panel">
      <dl className="wrap grid grid-cols-2 md:grid-cols-4">
        {FACTS.map(({ value, note }, i) => (
          <div
            key={value}
            className={cn(
              'py-5 pr-4 md:py-6',
              i % 2 === 0 ? 'pl-0' : 'border-l border-rule pl-5',
              i > 0 && 'md:border-l md:border-rule md:pl-5',
              i === 0 && 'md:pl-0'
            )}
          >
            <dt className="font-display text-[clamp(22px,2.6vw,30px)] leading-none font-medium">
              {value}
            </dt>
            <dd className="mt-1.5 text-[13px] text-muted">{note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
