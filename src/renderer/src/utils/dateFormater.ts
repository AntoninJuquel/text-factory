const dateFormatter = new Intl.DateTimeFormat(window.context.local, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export function formatDate(date: Date): string {
  return dateFormatter.format(date)
}
