'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/shared/lib/css';

/**
 * Плашка «наверх» в языке спецификации: ink-поле, кромка 2px, без тени.
 * Появляется после первого экрана; скрыта через visibility, поэтому
 * не попадает ни в tab-порядок, ни в дерево доступности.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-[2px]',
        'border border-ink bg-ink text-sheet transition-[opacity,visibility,transform] duration-200',
        'hover:bg-black motion-reduce:transition-none',
        isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1.5 opacity-0'
      )}
    >
      <ArrowUp size={18} strokeWidth={1.75} aria-hidden="true" />
      <span className="sr-only">Наверх</span>
    </button>
  );
}
