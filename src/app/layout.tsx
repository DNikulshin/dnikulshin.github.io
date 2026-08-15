import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import '@/styles/globals.css';
import { Header } from '@/features/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DNikulshin | Fullstack & AI разработчик',
  description:
    'Портфолио разработчика, специализирующегося на fullstack-разработке и AI-интеграции',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
