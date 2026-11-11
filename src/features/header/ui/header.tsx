import Link from 'next/link';
import { NAV_CTA, NAV_LINKS, SITE } from '../lib/_constants';
import { cn } from '@/shared/lib/css';

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="wrap flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="text-[15px] font-semibold">
          {SITE.name}
          <span className="hidden font-normal text-muted sm:inline"> — {SITE.role}</span>
        </Link>

        <nav className="flex items-center gap-5" aria-label="Основная навигация">
          {NAV_LINKS.map(({ href, label, hideOn }) => (
            <a
              key={href}
              href={href}
              className={cn(
                'flex min-h-9 items-center border-b border-transparent text-sm hover:border-ink',
                hideOn === 'md' && 'hidden md:flex'
              )}
            >
              {label}
            </a>
          ))}
          <a
            href={NAV_CTA.href}
            className="flex min-h-9 items-center text-sm font-medium text-signal hover:underline hover:underline-offset-4"
          >
            {NAV_CTA.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
