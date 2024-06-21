export function templateFiller(record: Record<string, string>, text: string) {
  for (const key in record) {
    const placeholder = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    text = text.replace(placeholder, record[key])
  }
  return text
}
