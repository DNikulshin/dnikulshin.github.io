'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../lib/_constants';
import { cn } from '@/shared/lib/css';
import { SiGithub } from 'react-icons/si';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedHref = path.replace(/\/$/, '');
    return normalizedPathname === normalizedHref;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          DNikulshin
        </Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-white',
                isActive(href) ? 'text-white' : 'text-gray-400'
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/DNikulshin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
