'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../lib/_constants';
import { cn } from '@/shared/lib/css';
import { SiGithub } from 'react-icons/si';
import { handleContactClick } from '@/shared/lib/scroll';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur-xl border-b border-indigo-400/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl" onClick={closeMenu}>
          DNikulshin
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const isAnchor = href.startsWith('#');
            const isActive = isAnchor ? false : pathname === href;

            if (isAnchor) {
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    handleContactClick(e);
                    closeMenu();
                  }}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-white cursor-pointer',
                    isActive ? 'text-white' : 'text-indigo-200/80'
                  )}
                >
                  {label}
                </a>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white',
                  isActive ? 'text-white' : 'text-indigo-200/80'
                )}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="https://github.com/DNikulshin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-200/80 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>
        </nav>

        {/* Кнопка бургера (мобильная) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Мобильное меню с анимацией */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-indigo-950/95 backdrop-blur-xl border-b border-indigo-400/20 overflow-hidden"
          >
            <div className="px-4 py-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map(({ href, label }) => {
                  const isAnchor = href.startsWith('#');
                  const isActive = isAnchor ? false : pathname === href;

                  if (isAnchor) {
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={(e) => {
                          handleContactClick(e);
                          closeMenu();
                        }}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-white',
                          isActive ? 'text-white' : 'text-indigo-200/80'
                        )}
                      >
                        {label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-white',
                        isActive ? 'text-white' : 'text-indigo-200/80'
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
                <a
                  href="https://github.com/DNikulshin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-indigo-200/80 hover:text-white transition-colors flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <SiGithub size={20} /> GitHub
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
