import { Hero } from '@/features/hero';
import { ProjectsGrid } from '@/features/projects-grid';
import { About } from '@/features/about';
import { Skills } from '@/features/skills';
import { Contact } from '@/features/contact';
import { SectionDivider } from '@/shared/ui';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <ProjectsGrid />
      <SectionDivider />
      <Contact />
    </>
  );
}
