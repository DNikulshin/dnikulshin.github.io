import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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

  // В режиме разработки убираем basePath для удобства локальной работы
  ...(process.env.NODE_ENV === 'development' && {
    basePath: '',
    assetPrefix: '',
  }),
};

export default nextConfig;
