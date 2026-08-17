import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';
import { GlobalErrorBoundary } from '@/shared/ui/global-error-boundary';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dnikulshin.github.io'),
  title: {
    default: 'DNikulshin | Fullstack & AI-разработчик',
    template: '%s | DNikulshin',
  },
  description:
    'Fullstack-разработчик (TypeScript/Python) с 8-летним опытом. Строю продукты полного цикла, интегрирую AI-решения (LLM/RAG). 10+ проектов в продакшене.',
  keywords: [
    'fullstack разработчик',
    'AI интеграция',
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'NestJS',
    'LLM',
    'RAG',
    'портфолио разработчика',
  ],
  openGraph: {
    title: 'DNikulshin | Fullstack & AI-разработчик',
    description:
      'Строю продукты полного цикла: от идеи до продакшена. Интегрирую AI-решения, создаю масштабируемые системы.',
    url: 'https://dnikulshin.github.io',
    siteName: 'DNikulshin',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DNikulshin – Fullstack & AI-разработчик',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Providers>
          <GlobalErrorBoundary>
            <Header />

            <main className="pt-16">{children}</main>
            <Footer />
          </GlobalErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
