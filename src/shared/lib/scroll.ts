export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    // Первая попытка: нативный scrollIntoView с block: 'center'
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    // Вторая попытка (гарантия): через 100 мс корректируем позицию вручную
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
 * Использует MutationObserver для ожидания появления элемента,
 * если он ещё не отрендерился.
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  currentPath: string = '/'
) {
  e.preventDefault();

  const targetId = href.replace('#', '');

  if (currentPath === '/') {
    // Проверяем, существует ли элемент уже сейчас
    const element = document.getElementById(targetId);
    if (element) {
      scrollToElement(targetId);
      window.history.pushState(null, '', href);
      return;
    }

    // Если элемента нет — ждём его появления через MutationObserver
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

    // Предохранитель: отключаем наблюдатель через 10 секунд
    setTimeout(() => {
      observer.disconnect();
    }, 10000);
  } else {
    // На других страницах перенаправляем на главную с якорем
    window.location.href = `/${href}`;
  }
}
