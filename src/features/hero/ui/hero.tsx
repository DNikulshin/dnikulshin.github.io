'use client';
import { Button } from '@/shared/ui/kit/button';
import { ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useHeroAnimation } from '../model/_use-hero-animation';
import { HERO_TITLE, HERO_SUBTITLE } from '../lib/_constants';

export function Hero() {
  const { titleRef, subtitleRef } = useHeroAnimation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
          {HERO_TITLE}
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {HERO_SUBTITLE}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Кнопка "Проекты" */}
          <Button size="lg" render={<a href="/projects" />}>
            Проекты <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Исправленная кнопка GitHub */}
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white"
            render={
              <a
                href="https://github.com/DNikulshin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit"
              />
            }
          >
            <SiGithub className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
