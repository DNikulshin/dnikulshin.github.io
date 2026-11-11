'use client';

import { usePathname } from 'next/navigation';
import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TELEGRAM,
  SITE_URL,
} from '@/shared/config/site';

export function JsonLd() {
  const pathname = usePathname();
  // trailingSlash: true — Next отдаёт '/projects/', поэтому хвостовой слэш отбрасываем
  const path = pathname.replace(/\/+$/, '') || '/';

  const schemas = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Person
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: 'DNikulshin',
        jobTitle: 'Fullstack-разработчик',
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: SITE_OG_IMAGE,
        email: SITE_EMAIL,
        sameAs: [SITE_GITHUB, SITE_TELEGRAM],
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'Python',
          'NestJS',
          'LLM',
          'RAG',
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
        name: 'Дмитрий Никульшин — fullstack-разработчик',
        description:
          'Портфолио fullstack-разработчика: системы телеметрии, документов и удалённого доступа.',
        url: SITE_URL,
        inLanguage: 'ru-RU',
        author: { '@id': `${SITE_URL}/#person` },
      },
      // 3. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: SITE_URL,
          },
          ...(path === '/projects'
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Проекты',
                  item: `${SITE_URL}/projects/`,
                },
              ]
            : []),
        ],
      },
      // 4. ItemList (только на главной и /projects)
      // ItemList главной страницы; на /projects список даёт ProjectsJsonLd с данными GitHub
      ...(path === '/'
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
                      'Поиск по внутренней документации: RAG на pgvector, парсеры PDF, DOCX, Markdown и URL, эмбеддинги через OpenRouter, MinIO, импорт из Google Drive через n8n. Стек: FastAPI, SQLAlchemy, PostgreSQL.',
                    url: 'https://github.com/DNikulshin/docbrain',
                    dateCreated: '2025-05-18',
                    keywords: ['AI', 'RAG', 'Python', 'FastAPI', 'pgvector'],
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
