import { express } from "@dependencies"
import * as controllers from "@controllers/prices.ts"

const router = express.Router()

router.get("/", controllers.getPricesEntitiesController)
router.get("/:entity", controllers.getPriceByEntityController)
router.get("/logo/:id", controllers.getImageLogoEntity)

export default router
