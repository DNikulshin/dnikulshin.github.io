# Дмитрий Никульшин — портфолио fullstack-разработчика

[![Deploy](https://img.shields.io/github/deployments/DNikulshin/DNikulshin.github.io/github-pages?label=deploy&style=flat-square)](https://dnikulshin.github.io/)
[![CI](https://img.shields.io/github/actions/workflow/status/DNikulshin/DNikulshin.github.io/ci.yml?label=CI&style=flat-square)](https://github.com/DNikulshin/DNikulshin.github.io/actions/workflows/ci.yml)

Живой сайт: **https://dnikulshin.github.io/**

Портфолио построено вокруг одного принципа: вместо обещаний — то, что можно открыть и проверить.
Проекты собраны не в карточки, а в записи с разбором: что делает система, на чём написана,
чем подтверждена (CI, тесты, лицензия).

## Что на странице

| Секция       | Задача                                                                       |
| ------------ | ---------------------------------------------------------------------------- |
| Первый экран | Схема реальной системы (телеметрия автопарка) вместо декоративного градиента |
| Цифры        | Стаж и открытый код: 12 репозиториев с CI, 10 с тестами                      |
| Опыт         | Коммерческий опыт и свои системы, без выдуманных метрик                      |
| Проекты      | Пять записей со спецификацией + остальные строками                           |
| Подход       | Три правила, которые повторяются в проектах                                  |
| Контакты     | Telegram и почта, без форм-посредников                                       |

## Стек

| Категория    | Технологии                                                  |
| ------------ | ----------------------------------------------------------- |
| Фреймворк    | Next.js 16 (App Router), статический экспорт                |
| Язык         | TypeScript (strict)                                         |
| Стили        | Tailwind CSS 4                                              |
| Данные       | GitHub GraphQL API (закреплённые репозитории + `pc-remote`) |
| Шрифты       | Unbounded (заголовки), Golos Text (текст) через `next/font` |
| Тестирование | Jest, Testing Library                                       |
| CI/CD        | GitHub Actions → GitHub Pages                               |
| Аналитика    | Яндекс.Метрика                                              |

## Запуск

```bash
pnpm install
pnpm dev          # разработка
pnpm build        # статический экспорт в out/
pnpm test         # тесты
pnpm type-check   # tsc --noEmit
pnpm lint
```

### Переменные окружения

`.env.local` (только для сборки, в браузер не попадает):

```env
GITHUB_TOKEN=personal_access_token   # чтение закреплённых репозиториев
```

Без токена сборка падает на валидации env, а рантайм использует `fallback-projects.ts`.

## Структура

```
src/
├── app/                 # маршруты и обёртки
├── features/            # экраны: hero, system-map, facts, experience,
│                        # projects-grid, approach, contact, header, footer
├── services/github/     # GraphQL-запрос, порядок проектов, fallback-данные
├── shared/              # UI-кит, утилиты, конфигурация
└── styles/              # токены палитры и типографики
```

Каждая фича отдаёт наружу только `index.ts`; внутренние файлы — с префиксом `_`.

## Дизайн-решения

- Палитра: `sheet #E9EBE4`, `panel #DFE2D8`, `ink #12171A`, `muted #55605C`, `rule #BCC3B8`,
  `signal #9C3A1B` — сигнальный цвет только для состояний и активных ссылок.
- Единственный несобытийный жест — точка данных, которая едет по шине на схеме.
  При `prefers-reduced-motion: reduce` движение отключается.
- Порядок проектов задаётся в `services/github/_order.ts`, а не настройкой закреплённых
  репозиториев: карточка не исчезает из-за галочки в профиле.

## Деплой

`main` → CI (`lint`, `type-check`, `test`, `build`) → `deploy.yml` публикует `out/` на GitHub Pages.

## Лицензия

MIT
