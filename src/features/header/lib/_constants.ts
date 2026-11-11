export const SITE = {
  name: 'Дмитрий Никульшин',
  role: 'fullstack / инфраструктура',
  telegram: 'https://t.me/nikulshin_dev',
  telegramHandle: '@nikulshin_dev',
  email: 'd.nikulshin.dev@gmail.com',
  github: 'https://github.com/DNikulshin',
} as const;

export const NAV_LINKS = [
  { href: '/#experience', label: 'Опыт', hideOn: 'md' },
  { href: '/#projects', label: 'Проекты', hideOn: null },
  { href: '/#approach', label: 'Подход', hideOn: 'md' },
] as const;

export const NAV_CTA = { href: '/#contact', label: 'Написать' } as const;
