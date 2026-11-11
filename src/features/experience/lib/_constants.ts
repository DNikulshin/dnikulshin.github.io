export interface ExperienceEntry {
  index: string;
  org: string;
  period: string;
  role: string;
  summary: string;
  facts: { label: string; value: string }[];
}

export const EXPERIENCE_TITLE = 'Где и что делал';

export const EXPERIENCE_KICKER = ['Две записи:', 'наём и свои системы'];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    index: '01',
    org: 'ООО «Связь Стандарт»',
    period: 'июль 2023 — декабрь 2024',
    role: 'Fullstack-разработчик',
    summary:
      'Собрал с нуля внутренний helpdesk для сервисной службы: выездные инженеры и диспетчеры. React PWA с Яндекс.Картами для распределения выездов, Node.js/Express и PostgreSQL на сервере, роли диспетчер / инженер / руководитель, уведомления о критических инцидентах. Переписал тяжёлые выборки и индексы — списки заявок с фильтрами перестали тормозить.',
    facts: [
      { label: 'Что изменилось', value: 'инженеры работают с телефона, а не с десктопа' },
      { label: 'Роль', value: 'один разработчик, от схемы БД до интерфейса' },
      { label: 'Стек', value: 'React · Node.js/Express · PostgreSQL' },
    ],
  },
  {
    index: '02',
    org: 'Свои системы',
    period: 'декабрь 2024 — сейчас',
    role: 'Проектирование и разработка',
    summary:
      'Проектирую и пишу сервисы целиком: схема данных, API, интерфейс, деплой. Ниже — пять из них, с открытым кодом, CI и разбором того, как они устроены.',
    facts: [
      { label: 'Темы', value: 'телеметрия · документы · доступ к машинам' },
      { label: 'Стек', value: 'TypeScript · Python · PostgreSQL · Docker' },
      { label: 'Проверка', value: '12 репозиториев с CI, в 10 есть тесты' },
    ],
  },
];
