import type { Metadata } from 'next';
import { Unbounded, Golos_Text } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/features/header';
import { Footer } from '@/features/footer';
import { GlobalErrorBoundary } from '@/shared/ui/global-error-boundary';
import '@/styles/globals.css';
import { ScrollToTop } from '@/features/scroll-to-top';
import { JsonLd } from '@/features/json-ld';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/shared/config/site';

const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-golos',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-unbounded',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Дмитрий Никульшин',
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
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
    title: SITE_TITLE,
    description:
      'TypeScript, Node.js, React, PostgreSQL. Системы, которые работают: телеметрия, документы, доступ к машинам.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Дмитрий Никульшин — fullstack-разработчик',
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
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`scroll-smooth ${golos.variable} ${unbounded.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd />
        {/* Оптимизированное подключение Яндекс.Метрики */}
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <Script
          id="yandex-metrika"
          strategy="lazyOnload"
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

              // Откладываем инициализацию до момента, пока браузер не освободится
              const initMetrika = () => {
                if (typeof ym === 'function') {
                  ym(111668865, 'init', {
                    ssr: true,
                    clickmap: true, // false  Для перформанса
                    ecommerce: 'dataLayer',
                    referrer: document.referrer,
                    url: location.href,
                    accurateTrackBounce: true,
                    trackLinks: true
                  });
                }
              };

              if (typeof window !== 'undefined') {
                if ('requestIdleCallback' in window) {
                  window.requestIdleCallback(initMetrika, { timeout: 2000 });
                } else {
                  setTimeout(initMetrika, 2000);
                }
              }
            `,
          }}
        />
        <noscript>
          <div>
            <picture>
              <img
                src="https://mc.yandex.ru/watch/111668865"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </picture>
          </div>
        </noscript>
      </head>
      <body>
        <GlobalErrorBoundary>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ScrollToTop />
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
