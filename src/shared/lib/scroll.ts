import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    setTimeout(() => {
      const headerHeight = 64;
      const rect = element.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - headerHeight;
      const currentTop = window.scrollY;

      if (Math.abs(currentTop - targetTop) > 5) {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  }
}

/**
 * Универсальный обработчик для якорных ссылок.
 * @param e - событие клика
 * @param href - ссылка (например, '#contact', '#about')
 * @param currentPath - текущий путь (например, '/projects')
 * @param router - экземпляр роутера Next.js (обязателен для навигации)
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  currentPath: string,
  router: AppRouterInstance // теперь обязательный
) {
  e.preventDefault();

  const targetId = href.replace('#', '');

  if (currentPath === '/') {
    const element = document.getElementById(targetId);
    if (element) {
      scrollToElement(targetId);
      window.history.pushState(null, '', href);
      return;
    }

    const observer = new MutationObserver(() => {
      const el = document.getElementById(targetId);
      if (el) {
        observer.disconnect();
        scrollToElement(targetId);
        window.history.pushState(null, '', href);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      observer.disconnect();
    }, 10000);
  } else {
    // Используем роутер Next.js для навигации без перезагрузки
    router.push(`/${href}`);
  }
}
