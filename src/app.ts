import { app } from "@/server.ts"
import { enviroments } from "@config/enviroments.ts"
import pricesRoutes from "@routes/prices.ts"

app.use("/api/prices", pricesRoutes)

app.listen(enviroments.PORT, () => {
  console.info(`[SERVER]: Running in http://localhost:${enviroments.PORT}`)
})
