export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function timeAgo(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const diff = Date.now() - d.getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'только что';
  if (minutes < 60) return `${minutes} минут назад`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} часов назад`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} дней назад`;
  return formatDate(d);
}
