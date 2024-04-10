import { dotenv } from "@dependencies"
const env = await dotenv.load()

export const enviroments = {
  PORT: Number(env.PORT || Deno.env.get("PORT") || 3000),
  PAGE_URL: String(env.PAGE_URL || Deno.env.get("PAGE_URL")),
  SERVICE_HOST: String(env.SERVICE_HOST || Deno.env.get("SERVICE_HOST")),
}
