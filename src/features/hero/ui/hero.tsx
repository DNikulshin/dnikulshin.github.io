'use client';

import { Button } from '@/shared/ui/kit/button';
import { ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useHeroAnimation } from '../model/_use-hero-animation';
import { HERO_TITLE, HERO_SUBTITLE } from '../lib/_constants';

export function Hero() {
  const { titleRef, subtitleRef } = useHeroAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
          {HERO_TITLE}
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {HERO_SUBTITLE}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" render={<a href="/projects" />}>
            Проекты <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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

      {/* Стрелка вниз */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="block text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
