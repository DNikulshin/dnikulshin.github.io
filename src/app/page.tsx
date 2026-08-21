import dynamic from 'next/dynamic';
import { Hero } from '@/features/hero';
import { SectionDivider } from '@/shared/ui';

const About = dynamic(() => import('@/features/about').then((mod) => mod.About));
const Skills = dynamic(() => import('@/features/skills').then((mod) => mod.Skills));
const ProjectsGrid = dynamic(() =>
  import('@/features/projects-grid').then((mod) => mod.ProjectsGrid)
);
const Contact = dynamic(() => import('@/features/contact').then((mod) => mod.Contact));

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
