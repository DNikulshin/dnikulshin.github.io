import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Парсим IP-адреса из .env.local, очищая от случайных пробелов
const devOrigins = process.env.ALLOWED_DEV_ORIGINS
  ? process.env.ALLOWED_DEV_ORIGINS.split(',').map((ip) => ip.trim())
  : [];

const nextConfig: NextConfig = {
  // Статический экспорт для GitHub Pages
  output: 'export',

  // Базовый путь (для деплоя в подпапку, если потребуется)
  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages корректно обрабатывает trailing slash
  trailingSlash: true,

  // Отключаем оптимизацию изображений (не поддерживается на GitHub Pages)
  images: {
    unoptimized: true,
  },

  // Пробрасываем переменные окружения для использования на сервере при сборке
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },

  // Настройки, которые применяются ТОЛЬКО в режиме разработки
  ...(isDev && {
    // В режиме разработки убираем basePath для удобства локальной работы
    basePath: '',
    assetPrefix: '',
    // Добавляем разрешенные IP-адреса, если они указаны в .env.local
    ...(devOrigins.length > 0 && { allowedDevOrigins: devOrigins }),
  }),
};

export default nextConfig;
