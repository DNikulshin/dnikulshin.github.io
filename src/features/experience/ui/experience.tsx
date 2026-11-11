import { EXPERIENCE, EXPERIENCE_KICKER, EXPERIENCE_TITLE } from '../lib/_constants';

export function Experience() {
  return (
    <section id="experience" className="wrap section-y border-t border-rule">
      <h2 className="mb-[clamp(24px,3vw,36px)] text-[clamp(19px,2.2vw,26px)]">
        {EXPERIENCE_TITLE}
      </h2>

      <div className="grid gap-4 md:grid-cols-[minmax(120px,168px)_minmax(0,1fr)] md:gap-12">
        <p className="text-[13px] text-muted md:pt-1.5">
          {EXPERIENCE_KICKER.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div>
          {EXPERIENCE.map((entry) => (
            <article
              key={entry.index}
              className="border-t border-rule py-6 first:border-t-0 first:pt-0"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                <span className="w-[2ch] text-[13px] text-muted">{entry.index}</span>
                <h3 className="text-[clamp(19px,2.1vw,23px)] font-semibold tracking-[-0.01em]">
                  {entry.org}
                </h3>
                <span className="ml-auto text-[13.5px] text-muted">{entry.period}</span>
              </div>

              <p className="mb-3.5 max-w-[62ch] text-ink/85">
                <span className="font-medium">{entry.role}.</span> {entry.summary}
              </p>

              <dl className="grid gap-x-6 gap-y-2 border-t border-dashed border-rule pt-3.5 sm:grid-cols-3">
                {entry.facts.map(({ label, value }) => (
                  <div key={label} className="text-[13.5px]">
                    <dt className="mb-0.5 text-[13px] text-muted">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
