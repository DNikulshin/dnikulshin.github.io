'use client';
import { scrollToElement } from '@/shared/lib/scroll';
import { Button } from '@/shared/ui/kit/button';
import { ArrowRight, Send } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useHeroAnimation } from '../model/_use-hero-animation';
import { HERO_TITLE, HERO_SUBTITLE_LINE_1, HERO_SUBTITLE_LINE_2 } from '../lib/_constants';
import { ParticlesBackground } from './particles-background';

export function Hero() {
  const { titleRef, subtitleRef } = useHeroAnimation();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-linear-to-br from-indigo-950 via-slate-900 to-slate-950 text-white px-4 overflow-hidden pt-16">
      {/* Декоративное свечение */}
      <ParticlesBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {HERO_TITLE}
        </h1>
        <br />
        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {HERO_SUBTITLE_LINE_1}
          <br />
          {HERO_SUBTITLE_LINE_2}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" variant="default" onClick={() => scrollToElement('contact')}>
            Связаться <Send className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white"
            render={<a href="/projects" />}
          >
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '#projects');
          }}
          className="block text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to projects"
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
