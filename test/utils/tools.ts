import { enviroments } from "@config/enviroments.ts"

export const GET = (path: `/${string}`) => {
  return fetch(`http://localhost:${enviroments.PORT}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
}
