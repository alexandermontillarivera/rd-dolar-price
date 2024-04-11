export const useGenerateArrayIds = (length: number) => {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(crypto.randomUUID())
  }
  return array
}
