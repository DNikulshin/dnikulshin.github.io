'use client';

import { usePathname } from 'next/navigation';

export function JsonLd() {
  const pathname = usePathname();

  // Базовые данные Person
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'DNikulshin',
    alternateName: 'Дмитрий Никульшин',
    jobTitle: 'Fullstack & AI Developer',
    description:
      'Fullstack-разработчик (TypeScript/Python) с 8-летним опытом. Специализируюсь на интеграции AI-решений, создании продуктов полного цикла.',
    url: 'https://dnikulshin.github.io',
    sameAs: [
      'https://github.com/DNikulshin',
      'https://t.me/dnikulshin_dev',
      'https://linkedin.com/in/dnikulshin',
    ],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Python', 'NestJS', 'LLM', 'RAG', 'LangChain'],
    worksFor: {
      '@type': 'Organization',
      name: 'Self-employed',
    },
  };

  // Данные о сайте
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DNikulshin | Fullstack & AI-разработчик',
    description:
      'Портфолио Fullstack-разработчика с опытом в создании продуктов полного цикла и AI-интеграциях.',
    url: 'https://dnikulshin.github.io',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://dnikulshin.github.io/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Хлебные крошки (для навигации)
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://dnikulshin.github.io',
      },
      ...(pathname === '/projects'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Проекты',
              item: 'https://dnikulshin.github.io/projects',
            },
          ]
        : []),
    ],
  };

  // Список проектов (ItemList) — добавляем только на главной или на /projects
  const projects =
    pathname === '/' || pathname === '/projects'
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Проекты',
          description: 'Мои ключевые проекты',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              url: 'https://github.com/DNikulshin/docbrain',
            },
            {
              '@type': 'ListItem',
              position: 2,
              url: 'https://github.com/DNikulshin/corporate-transport',
            },
            {
              '@type': 'ListItem',
              position: 3,
              url: 'https://github.com/DNikulshin/scan-agent',
            },
            {
              '@type': 'ListItem',
              position: 4,
              url: 'https://github.com/DNikulshin/support-ticketing-system',
            },
            {
              '@type': 'ListItem',
              position: 5,
              url: 'https://github.com/DNikulshin/ai-automation-starter',
            },
            {
              '@type': 'ListItem',
              position: 6,
              url: 'https://github.com/DNikulshin/AnyWhereDesk',
            },
          ],
        }
      : null;

  // Объединяем все объекты
  const schemas = [person, website, breadcrumb, ...(projects ? [projects] : [])];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
