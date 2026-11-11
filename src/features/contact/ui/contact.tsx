import { CONTACT_CHANNELS, CONTACT_LEDE, CONTACT_TITLE } from '../lib/_constants';

export function Contact() {
  return (
    <section id="contact" className="border-t border-rule bg-panel">
      <div className="wrap section-y grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div>
          <h2 className="mb-3 text-[clamp(19px,2.2vw,26px)]">{CONTACT_TITLE}</h2>
          <p className="max-w-[46ch] text-[clamp(16px,1.35vw,19px)] text-muted">{CONTACT_LEDE}</p>
        </div>

        <div className="border-t border-rule">
          {CONTACT_CHANNELS.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex min-h-12 items-center justify-between gap-4 border-b border-rule py-3.5 hover:[&_span]:text-signal"
            >
              <span className="transition-colors">{label}</span>
              <em className="text-sm not-italic text-muted">{value} →</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
