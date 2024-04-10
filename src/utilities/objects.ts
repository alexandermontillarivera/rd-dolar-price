export const invertObject = (object: Record<string, string>) => {
  return Object.entries(object).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      acc[value] = key
      return acc
    },
    {},
  )
}
