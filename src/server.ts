import { express } from "@dependencies"
import { STATIC_FILES_PATH } from "@constants"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(STATIC_FILES_PATH))

export { app }
