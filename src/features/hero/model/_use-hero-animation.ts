'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useHeroAnimation() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(titleRef.current, { opacity: 0, y: 60, duration: 1 }).from(
      subtitleRef.current,
      { opacity: 0, y: 30, duration: 0.8 },
      '-=0.5'
    );
  }, []);

  return { titleRef, subtitleRef };
}
