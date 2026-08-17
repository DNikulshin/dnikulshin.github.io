import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';
import { GlobalErrorBoundary } from '@/shared/ui/global-error-boundary';
import '@/styles/globals.css';
import { ScrollToTop } from '@/features/scroll-to-top';
import { JsonLd } from '@/features/json-ld';

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
      <head>
        <JsonLd />
        {/* Яндекс.Метрика */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t), a=e.getElementsByTagName(t)[0];
                k.async=1; k.src=r; a.parentNode.insertBefore(k,a);
              })
              (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=111668865', 'ym');

              ym(111668865, 'init', {
                ssr: true,
                clickmap: true,
                ecommerce: 'dataLayer',
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/111668865"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className={inter.className}>
        <Providers>
          <GlobalErrorBoundary>
            <Header />

            <main className="pt-16">{children}</main>
            <Footer />
            <ScrollToTop />
          </GlobalErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
