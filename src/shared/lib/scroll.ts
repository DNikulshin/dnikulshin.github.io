export function scrollToElement(elementId: string, options?: ScrollIntoViewOptions) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options,
    });
  }
}

// export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
//   e.preventDefault();
//   const targetId = href.replace('#', '');
//   scrollToElement(targetId);
//   window.history.pushState(null, '', href);
// }

export function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const pathname = window.location.pathname;
  if (pathname === '/') {
    // Если мы на главной, просто прокручиваем
    scrollToElement('contact');
    window.history.pushState(null, '', '#contact');
  } else {
    // Если мы на другой странице, перенаправляем на главную с якорем
    window.location.href = '/#contact';
  }
}
