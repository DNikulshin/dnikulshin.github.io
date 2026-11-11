import { Hero } from '@/features/hero';
import { Facts } from '@/features/facts';
import { Experience } from '@/features/experience';
import { ProjectsGrid } from '@/features/projects-grid';
import { Approach } from '@/features/approach';
import { Contact } from '@/features/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Facts />
      <Experience />
      <ProjectsGrid />
      <Approach />
      <Contact />
    </>
  );
}
