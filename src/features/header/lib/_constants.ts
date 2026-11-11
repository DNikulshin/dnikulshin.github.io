import {
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_NAME,
  SITE_ROLE,
  SITE_TELEGRAM,
  SITE_TELEGRAM_HANDLE,
} from '@/shared/config/site';

export const SITE = {
  name: SITE_NAME,
  role: SITE_ROLE,
  telegram: SITE_TELEGRAM,
  telegramHandle: SITE_TELEGRAM_HANDLE,
  email: SITE_EMAIL,
  github: SITE_GITHUB,
} as const;

export const NAV_LINKS = [
  { href: '/#experience', label: 'Опыт', hideOn: 'md' },
  { href: '/#projects', label: 'Проекты', hideOn: null },
  { href: '/#approach', label: 'Подход', hideOn: 'md' },
] as const;

export const NAV_CTA = { href: '/#contact', label: 'Написать' } as const;
