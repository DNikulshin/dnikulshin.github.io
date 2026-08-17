import { Repository } from '@/services/github/_types';

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
        name: 'DNikulshin',
        url: 'https://dnikulshin.github.io',
      },
      codeRepository: repo.url,
      ...(repo.stargazerCount > 0 && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: Math.min(5, Math.round(repo.stargazerCount / 10)),
          ratingCount: repo.stargazerCount,
        },
      }),
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Проекты разработчика DNikulshin',
    description: 'Мои ключевые проекты с открытым исходным кодом',
    url: 'https://dnikulshin.github.io/projects',
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
