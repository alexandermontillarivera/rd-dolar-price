import { express, cors } from "@dependencies"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

export { app }
