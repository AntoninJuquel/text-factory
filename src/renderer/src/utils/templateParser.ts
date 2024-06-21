const variableRegexp = /{{([^}]+)}}/g

export function templateParser(content: string) {
  const variables = content.match(variableRegexp)
  return [...new Set(variables)]
}
