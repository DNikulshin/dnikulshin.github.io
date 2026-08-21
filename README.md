# 🌐 DNikulshin — Портфолио Fullstack & AI-разработчика

[![GitHub deployments](https://img.shields.io/github/deployments/DNikulshin/DNikulshin.github.io/github-pages?label=Deploy%20status&style=flat-square)](https://dnikulshin.github.io/)
[![CI](https://img.shields.io/github/actions/workflow/status/DNikulshin/DNikulshin.github.io/ci.yml?label=CI&style=flat-square)](https://github.com/DNikulshin/DNikulshin.github.io/actions/workflows/ci.yml)
[![Lighthouse Performance](https://img.shields.io/badge/Performance-100-brightgreen?style=flat-square)](https://pagespeed.web.dev/analysis?url=https://dnikulshin.github.io/)
[![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-99-brightgreen?style=flat-square)](https://pagespeed.web.dev/analysis?url=https://dnikulshin.github.io/)
[![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen?style=flat-square)](https://pagespeed.web.dev/analysis?url=https://dnikulshin.github.io/)
[![Lighthouse SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=flat-square)](https://pagespeed.web.dev/analysis?url=https://dnikulshin.github.io/)

Профессиональное портфолио Fullstack & AI-разработчика. Сайт демонстрирует опыт, проекты, навыки и контакты. Адаптивный, оптимизированный, с тёмной темой и анимациями.

👉 [**Посмотреть сайт**](https://dnikulshin.github.io/)

---

## 📦 Технологический стек

| Категория                | Технологии                  |
| ------------------------ | --------------------------- |
| **Фреймворк**            | Next.js 16 (App Router)     |
| **Язык**                 | TypeScript (strict)         |
| **Стили**                | Tailwind CSS 4              |
| **UI-библиотека**        | shadcn/ui (Radix UI)        |
| **Анимации**             | Framer Motion, GSAP         |
| **Управление данными**   | TanStack Query              |
| **Валидация**            | Zod                         |
| **Тестирование**         | Jest, React Testing Library |
| **CI/CD**                | GitHub Actions              |
| **Хостинг**              | GitHub Pages                |
| **Аналитика**            | Яндекс.Метрика              |
| **Форма обратной связи** | Formspree                   |

---

## ✨ Ключевые особенности

- ✅ **Адаптивный дизайн** — корректно отображается на всех устройствах.
- ✅ **Тёмная тема** — с акцентами в гамме индиго.
- ✅ **Анимированные секции** — плавное появление при скролле.
- ✅ **Динамические проекты** — данные загружаются через GitHub API.
- ✅ **SEO-оптимизация** — метаданные, Open Graph, sitemap, robots.txt.
- ✅ **Микроразметка JSON-LD** — улучшает видимость в поиске.
- ✅ **Форма обратной связи** — отправка сообщений через Formspree.
- ✅ **Высокая производительность** — Lighthouse: 100/99/100/100.
- ✅ **Профессиональный CI/CD** — автоматическая проверка и деплой.

---

## 🚀 Быстрый старт

### Установка и запуск

```bash
# Клонируйте репозиторий
git clone https://github.com/DNikulshin/DNikulshin.github.io.git
cd DNikulshin.github.io

# Установите зависимости (используется pnpm)
pnpm install

# Запустите в режиме разработки
pnpm dev

# Соберите статический сайт
pnpm build

# Запустите тесты
pnpm test
Переменные окружения
Создайте файл .env.local в корне проекта:

env
GITHUB_TOKEN=ваш_github_personal_access_token
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/ваш_id
Примечание: GITHUB_TOKEN необходим для доступа к GitHub API (чтение закреплённых репозиториев). Токен используется только во время сборки (на сервере).

🏗️ Архитектура проекта

Проект построен на ED (Evolutionary Design) — модульной архитектуре с чётким разделением ответственности:

text
src/
├── app/                # Маршрутизация и глобальные обёртки
├── features/           # Независимые бизнес-фичи
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects-grid/
│   ├── contact/
│   ├── header/
│   ├── footer/
│   └── scroll-to-top/
├── services/           # Переиспользуемые сервисы (GitHub API и др.)
├── shared/             # Ядро: UI-кит, утилиты, конфигурация
└── styles/             # Глобальные стили
Каждая фича имеет свой index.ts (public API) и приватные файлы с префиксом _.

🧪 Тестирование и качество кода

Линтеры: ESLint + Prettier проверяют код перед каждым коммитом (Husky).

Типизация: TypeScript в строгом режиме.

Тесты: Jest + React Testing Library охватывают сервисы и компоненты.

CI: GitHub Actions автоматически запускает линтер, проверку типов, тесты и сборку при каждом пуше.

🌐 Деплой

GitHub Pages — основной хостинг (автоматический деплой через deploy.yml).

GitLab Pages — альтернативный хостинг (для резервирования, настроен отдельно).

📄 Лицензия

MIT — вы можете свободно использовать этот код для своих целей.

🤝 Контакты

Email: d.nikulshin.dev@gmail.com

Telegram: @dnikulshin_dev

GitHub: DNikulshin

⭐️ Если вам понравился проект, поставьте звезду на GitHub! Это поможет мне в продвижении. Спасибо! 🙌
```
