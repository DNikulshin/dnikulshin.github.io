import { SITE_EMAIL, SITE_GITHUB, SITE_TELEGRAM, SITE_TELEGRAM_HANDLE } from '@/shared/config/site';

export const CONTACT_TITLE = 'Открыт к работе';

export const CONTACT_LEDE =
  'Ищу команду, где нужно доводить продукт до продакшена и держать его там: бэкенд, realtime, интеграции с LLM. Отвечаю в тот же день, созвон — в любой день недели.';

export const CONTACT_CHANNELS = [
  { label: 'Telegram', value: SITE_TELEGRAM_HANDLE, href: SITE_TELEGRAM },
  { label: 'Почта', value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  { label: 'GitHub', value: '31 репозиторий', href: SITE_GITHUB },
] as const;
