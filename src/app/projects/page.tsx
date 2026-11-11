import type { Metadata } from 'next';
import { fetchPinnedRepos } from '@/services/github';
import { ProjectsJsonLd } from '@/features/json-ld/ui/projects-json-ld';
import { ProjectsPageClient } from './projects-page-client';

export const metadata: Metadata = {
  title: 'Проекты',
  description:
    'Проекты с открытым кодом: телеметрия автопарка, RAG-ассистент по документации, helpdesk, удалённый доступ. Ссылки на репозитории, CI и тесты.',
  alternates: {
    canonical: '/projects/',
  },
  openGraph: {
    title: 'Проекты',
    description:
      'Проекты с открытым кодом: телеметрия автопарка, RAG-ассистент по документации, helpdesk, удалённый доступ.',
    url: '/projects/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default async function ProjectsPage() {
  const repos = await fetchPinnedRepos();

  return (
    <>
      <ProjectsJsonLd repos={repos} />
      <ProjectsPageClient repos={repos} />
    </>
  );
}
