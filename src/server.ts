import { express, cors, serveStatic, path } from "@dependencies"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(serveStatic(path.join(Deno.cwd(), "public")))

export { app }
