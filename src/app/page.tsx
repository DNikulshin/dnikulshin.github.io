import { Hero } from '@/features/hero';
import { ProjectsGrid } from '@/features/projects-grid';
import { About } from '@/features/about';
import { Skills } from '@/features/skills';
import { Contact } from '@/features/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
