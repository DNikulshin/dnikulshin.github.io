import { APPROACH, APPROACH_KICKER, APPROACH_TITLE } from '../lib/_constants';

export function Approach() {
  return (
    <section id="approach" className="wrap section-y border-t border-rule">
      <h2 className="mb-[clamp(24px,3vw,36px)] text-[clamp(19px,2.2vw,26px)]">{APPROACH_TITLE}</h2>

      <div className="grid gap-4 md:grid-cols-[minmax(120px,168px)_minmax(0,1fr)] md:gap-12">
        <p className="text-[13px] text-muted md:pt-1.5">
          {APPROACH_KICKER.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div>
          {APPROACH.map(({ title, text }) => (
            <div key={title} className="border-t border-rule py-5 first:border-t-0 first:pt-0">
              <h3 className="mb-1.5 text-[17px] font-semibold">{title}</h3>
              <p className="max-w-[64ch] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
