import { Repository } from '@/services/github/_types';
import { SITE_GITHUB, SITE_NAME, SITE_URL } from '@/shared/config/site';

interface ProjectsJsonLdProps {
  repos: Repository[];
}

export function ProjectsJsonLd({ repos }: ProjectsJsonLdProps) {
  if (!repos || repos.length === 0) return null;

  // Формируем список для ItemList
  const itemListElement = repos.map((repo, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareSourceCode',
      name: repo.name,
      description: repo.description || undefined,
      url: repo.url,
      programmingLanguage: repo.primaryLanguage?.name || undefined,
      datePublished: repo.updatedAt,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      codeRepository: repo.url,
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Проекты ${SITE_NAME}`,
    description: 'Проекты с открытым исходным кодом',
    url: `${SITE_URL}/projects/`,
    author: { '@id': `${SITE_URL}/#person`, '@type': 'Person', name: SITE_NAME, url: SITE_GITHUB },
    numberOfItems: repos.length,
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
