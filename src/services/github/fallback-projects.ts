import type { Repository } from './_types';

export const FALLBACK_PROJECTS: Repository[] = [
  {
    name: 'docbrain',
    description:
      'AI-консультант по документации с RAG (pgvector), agent с function calling, синхронизация через n8n. Стек: FastAPI, Next.js, PostgreSQL, MinIO, Authelia. Веб-чат + Telegram-бот.',
    url: 'https://github.com/DNikulshin/docbrain',
    stargazerCount: 5,
    forkCount: 1,
    primaryLanguage: { name: 'Python', color: '#3572A5' },
    updatedAt: '2025-05-18T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'ai-agent' } },
        { topic: { name: 'docker' } },
        { topic: { name: 'fastapi' } },
      ],
    },
  },
  {
    name: 'corporate-transport',
    description:
      'Real-time GPS fleet tracking PWA. Drivers stream geolocation from phones via WebSocket; employees see live markers on Yandex Maps via SSE. Offline queue (IndexedDB), JWT auth, role-based access. Stack: Fastify, React 19, TypeScript, PostgreSQL, Redis Pub/Sub, Vite PWA, Expo.',
    url: 'https://github.com/DNikulshin/corporate-transport',
    stargazerCount: 3,
    forkCount: 0,
    primaryLanguage: { name: 'TypeScript', color: '#3178C6' },
    updatedAt: '2025-05-04T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'expo' } },
        { topic: { name: 'fastify' } },
        { topic: { name: 'fleet-management' } },
      ],
    },
  },
  {
    name: 'scan-agent',
    description:
      'AI-агент для автоматического мониторинга фриланс-бирж. Парсит заказы (Playwright), оценивает их нейросетью (DeepSeek), генерирует персонализированные отклики и отправляет уведомления в Telegram. Все заказы синхронизируются в облако (Supabase) и доступны через PWA-дашборд.',
    url: 'https://github.com/DNikulshin/scan-agent',
    stargazerCount: 4,
    forkCount: 1,
    primaryLanguage: { name: 'TypeScript', color: '#3178C6' },
    updatedAt: '2025-05-18T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'playwright-web-scraping' } },
        { topic: { name: 'pwa' } },
        { topic: { name: 'ai-agent-automation-llm' } },
      ],
    },
  },
  {
    name: 'support-ticketing-system',
    description:
      'Helpdesk CRM with ticket management, role-based access (Admin/User), internal & external comments, file attachments, admin panel. JWT auth, Swagger API docs. Stack: NestJS, Prisma, SQLite, React 19.',
    url: 'https://github.com/DNikulshin/support-ticketing-system',
    stargazerCount: 2,
    forkCount: 0,
    primaryLanguage: { name: 'TypeScript', color: '#3178C6' },
    updatedAt: '2025-05-04T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'crm' } },
        { topic: { name: 'fullstack' } },
        { topic: { name: 'helpdesk' } },
      ],
    },
  },
  {
    name: 'ai-automation-starter',
    description:
      'Готовый шаблон для автоматизации бизнес-процессов с использованием LLM (OpenRouter/Claude). Забирает сырые данные → структурирует через AI → сохраняет в Obsidian/Markdown → уведомляет в Telegram. Упакован в Docker, покрыт тестами.',
    url: 'https://github.com/DNikulshin/ai-automation-starter',
    stargazerCount: 1,
    forkCount: 0,
    primaryLanguage: { name: 'Python', color: '#3572A5' },
    updatedAt: '2025-05-11T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'docker-python-self-hosted' } },
        { topic: { name: 'llm-openrouter-claude' } },
        { topic: { name: 'obsidian-markdown-data-processing' } },
      ],
    },
  },
  {
    name: 'AnyWhereDesk',
    description:
      "Self-hosted browser-based remote desktop access for Windows. RDP/SSH/VNC через Apache Guacamole с 2FA, автоматический Let's Encrypt SSL через Caddy, поддержка Cloudflare DDNS. 6-этапный идемпотентный установщик для Windows + WSL2 + Docker.",
    url: 'https://github.com/DNikulshin/AnyWhereDesk',
    stargazerCount: 0,
    forkCount: 0,
    primaryLanguage: { name: 'PowerShell', color: '#012456' },
    updatedAt: '2025-05-04T00:00:00Z',
    repositoryTopics: {
      nodes: [
        { topic: { name: '2fa' } },
        { topic: { name: 'caddy' } },
        { topic: { name: 'cloudflare' } },
      ],
    },
  },
];
