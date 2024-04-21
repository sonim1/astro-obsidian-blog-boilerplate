// Return the date as yyyy-mm-dd
export const formatDate = (lang: string, date: Date) =>
  Intl.DateTimeFormat(lang, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
