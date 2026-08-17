'use client';

import { usePathname } from 'next/navigation';

export function JsonLd() {
  const pathname = usePathname();

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Person
      {
        '@type': 'Person',
        name: 'DNikulshin',
        alternateName: 'Дмитрий Никульшин',
        jobTitle: 'Fullstack & AI Developer',
        description:
          'Fullstack-разработчик с 8-летним опытом. Специализируюсь на создании сложных веб-приложений и интеграции AI-решений (LLM, RAG).',
        url: 'https://dnikulshin.github.io',
        image: 'https://dnikulshin.github.io/og-image.jpg',
        sameAs: [
          'https://github.com/DNikulshin',
          'https://t.me/dnikulshin_dev',
          'https://linkedin.com/in/dnikulshin',
        ],
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'Python',
          'NestJS',
          'LLM',
          'RAG',
          'LangChain',
          'PostgreSQL',
          'Docker',
          'GitHub Actions',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Self-employed',
        },
      },
      // 2. WebSite
      {
        '@type': 'WebSite',
        name: 'DNikulshin | Fullstack & AI-разработчик',
        description:
          'Портфолио Fullstack-разработчика с опытом в создании продуктов полного цикла и AI-интеграциях.',
        url: 'https://dnikulshin.github.io',
        inLanguage: 'ru-RU',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://dnikulshin.github.io/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      // 3. BreadcrumbList
      {
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
      },
      // 4. ItemList (только на главной и /projects)
      ...(pathname === '/' || pathname === '/projects'
        ? [
            {
              '@type': 'ItemList',
              name: 'Проекты',
              description: 'Ключевые проекты Fullstack & AI-разработчика',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'docbrain',
                    description:
                      'AI-консультант по документации с RAG (pgvector), agent с function calling, синхронизация через n8n. Стек: FastAPI, Next.js, PostgreSQL, MinIO, Authelia.',
                    url: 'https://github.com/DNikulshin/docbrain',
                    dateCreated: '2025-05-18',
                    keywords: ['AI', 'RAG', 'Python', 'FastAPI'],
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'corporate-transport',
                    description:
                      'Real-time GPS fleet tracking PWA. WebSocket для водителей, SSE для сотрудников, Яндекс.Карты, offline queue (IndexedDB). Стек: Fastify, React 19, TypeScript, PostgreSQL, Redis Pub/Sub, Vite PWA, Expo.',
                    url: 'https://github.com/DNikulshin/corporate-transport',
                    dateCreated: '2025-05-04',
                    keywords: ['GPS', 'PWA', 'TypeScript', 'Fastify'],
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'scan-agent',
                    description:
                      'AI-агент для автоматического мониторинга фриланс-бирж. Парсит заказы (Playwright), оценивает нейросетью (DeepSeek), генерирует персонализированные отклики, отправляет уведомления в Telegram. Синхронизация с Supabase, PWA-дашборд.',
                    url: 'https://github.com/DNikulshin/scan-agent',
                    dateCreated: '2025-05-18',
                    keywords: ['AI', 'Playwright', 'TypeScript', 'PWA'],
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'support-ticketing-system',
                    description:
                      'Helpdesk CRM с управлением тикетами, ролевой доступ (Admin/User), внутренние и внешние комментарии, вложения, админ-панель. JWT auth, Swagger API docs. Стек: NestJS, Prisma, SQLite, React 19.',
                    url: 'https://github.com/DNikulshin/support-ticketing-system',
                    dateCreated: '2025-05-04',
                    keywords: ['CRM', 'NestJS', 'TypeScript', 'React'],
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'ai-automation-starter',
                    description:
                      'Готовый шаблон для автоматизации бизнес-процессов с использованием LLM (OpenRouter/Claude). Забирает сырые данные → структурирует через AI → сохраняет в Obsidian/Markdown → уведомляет в Telegram. Упакован в Docker, покрыт тестами.',
                    url: 'https://github.com/DNikulshin/ai-automation-starter',
                    dateCreated: '2025-05-11',
                    keywords: ['AI', 'Python', 'Docker', 'LLM'],
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  item: {
                    '@type': 'CreativeWork',
                    name: 'AnyWhereDesk',
                    description:
                      "Self-hosted browser-based remote desktop access for Windows. RDP/SSH/VNC через Apache Guacamole с 2FA, автоматический Let's Encrypt SSL через Caddy, поддержка Cloudflare DDNS. 6-этапный идемпотентный установщик для Windows + WSL2 + Docker.",
                    url: 'https://github.com/DNikulshin/AnyWhereDesk',
                    dateCreated: '2025-05-04',
                    keywords: ['Remote Desktop', 'PowerShell', 'Docker', 'Caddy'],
                  },
                },
              ],
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
    />
  );
}
