import { enviroments } from "@config/enviroments.ts"
import { STORAGE } from "@test-constants"

export const GET = (path: `/${string}`) => {
  return fetch(`${enviroments.SERVICE_HOST}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
}

export const parseStorageJSONItem = <T = object>(
  storageItem: keyof typeof STORAGE,
) => {
  const storage = localStorage.getItem(STORAGE[storageItem])
  return JSON.parse(storage ?? "{}") as T
}

export const randomString = (length: number = 20) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
