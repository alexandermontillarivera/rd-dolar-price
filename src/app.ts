import { app } from "@/server.ts"
import { enviroments } from "@config/enviroments.ts"
import pricesRoutes from "@routes/prices.ts"

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to the API",
  })
})

app.use("/api/prices", pricesRoutes)

app.listen(enviroments.PORT, () => {
  console.info(`[SERVER]: Running in http://localhost:${enviroments.PORT}`)
})
