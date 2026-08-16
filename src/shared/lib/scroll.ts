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

export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetId = href.replace('#', '');
  scrollToElement(targetId);
  window.history.pushState(null, '', href);
}
