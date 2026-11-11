/**
 * Редакционные данные поверх GitHub API: человеческие описания и то,
 * чем проект можно проверить. Если репозитория нет в карте — берём API-данные.
 */
export interface ProjectCopy {
  domain: string;
  description: string;
  stack: string;
  proof: string;
}

export const PROJECT_COPY: Record<string, ProjectCopy> = {
  'corporate-transport': {
    domain: 'логистика',
    description:
      'Диспетчерская для автопарка: водители шлют координаты с телефона, диспетчер видит машины на карте и историю треков. Realtime на WebSocket и SSE, офлайн-очередь в IndexedDB, роли и JWT. Один репозиторий: PWA, мобильное приложение и API.',
    stack: 'Fastify · React 19 · Expo · Redis',
    proof: '2 workflow · vitest · MIT',
  },
  docbrain: {
    domain: 'AI / документы',
    description:
      'Поиск по внутренней документации: RAG на pgvector, парсеры PDF, DOCX, Markdown и URL, эмбеддинги через OpenRouter, файлы в MinIO, импорт из Google Drive через n8n. Отвечает со ссылкой на источник, а не «в целом по смыслу».',
    stack: 'FastAPI · Next.js · pgvector',
    proof: '2 workflow (CI + CD) · pytest · MIT',
  },
  'pc-remote': {
    domain: 'инфраструктура',
    description:
      'Управление парком Windows-машин: питание, громкость, скриншоты, расписание. Клиент ставится как служба, сервер держит очередь команд, есть релизы под Windows.',
    stack: 'TypeScript · Node · Windows',
    proof: '4 workflow · 10 spec-файлов · релизы',
  },
  'support-ticketing-system': {
    domain: 'CRM',
    description:
      'Helpdesk: заявки, роли admin/user, внутренние комментарии, вложения, JWT-авторизация и Swagger. Первая система, где RBAC доведён до конца, а не «пока просто админ».',
    stack: 'NestJS · Prisma · React 19',
    proof: '1 workflow · unit + e2e',
  },
  'scan-agent': {
    domain: 'AI-агент',
    description:
      'Агент, который сам обходит фриланс-биржи, вытаскивает заказы, оценивает их через LLM и готовит черновики откликов. Playwright для сбора, PWA-дашборд для просмотра, уведомления в Telegram.',
    stack: 'TypeScript · Playwright · LLM',
    proof: '2 workflow · MIT',
  },
};

export const PROJECTS_TITLE = 'Что можно открыть и прочитать';
export const PROJECTS_KICKER = ['Пять систем,', 'собранных и запущенных'];
export const PROJECTS_EMPTY = 'Закреплённые репозитории не загрузились — данные недоступны.';

/** Проекты, которые не попали в основную пятёрку: показываем строкой. */
export const EXTRA_PROJECTS = [
  { name: 'AnyWhereDesk', note: 'самоподнятый remote desktop: Guacamole, Caddy, HTTPS, 2FA' },
  {
    name: 'MyPasswordManager',
    note: 'менеджер паролей на PowerShell/WPF: AES-256, глобальный хоткей',
  },
  {
    name: 'ai-automation-starter',
    note: 'конвейер «сырые данные → LLM → Markdown → Telegram», pytest',
  },
  { name: 'hh-scanner', note: 'сбор вакансий с hh.ru и фильтрация под профиль' },
] as const;
