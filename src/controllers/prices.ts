import type { Request, Response } from "npm:@types/express"
import { ENTITIES_IDS, ENTITIES_IDS_INVERTED, ENTITIES_PAGES, URL_SB_SEARCH } from "@constants"
import { enviroments } from "@config/enviroments.ts"
import { getPriceByEntity, getPrices } from "@utilities/getPrices.ts"

export const getPricesEntitiesController = async (
  _request: Request,
  response: Response,
) => {
  try {
    const result = await getPrices()

    const formattedResult = result.map((item) => {
      const id = ENTITIES_IDS[item.entity] ?? item.entity
      const url = ENTITIES_PAGES[item.entity] ?? `${URL_SB_SEARCH}${item.entity}`
      const logo = `${enviroments.SERVICE_HOST}/images/${id}.png`
      return {
        ...item,
        id,
        logo,
        url
      }
    })

    return response.status(200).json({
      prices: formattedResult,
      message: "Prices fetched successfully",
      referenceExtractedPage: enviroments.PAGE_URL,
    })
  } catch (error) {
    console.error(error)
    return response.status(500).json({
      message: "Internal server error",
    })
  }
}

export const getPriceByEntityController = async (
  request: Request,
  response: Response,
) => {
  const { entity } = request.params

  const entityName = ENTITIES_IDS_INVERTED[entity] ?? null

  if (!entityName) {
    return response.status(404).json({
      message: "Entity not found",
    })
  }

  try {
    const result = await getPriceByEntity(entityName)

    if (!result) {
      return response.status(404).json({
        message: "Entity not found",
      })
    }

    const logo = `${enviroments.SERVICE_HOST}/images/${entity}.png`

    const url = ENTITIES_PAGES[entityName] ?? `${URL_SB_SEARCH}${entityName}`

    return response.status(200).json({
      price: {
        ...result,
        id: entity,
        logo,
        url
      },
      message: "Price fetched successfully",
      referenceExtractedPage: enviroments.PAGE_URL,
    })
  } catch (error) {
    console.error(error)
    return response.status(500).json({
      message: "Internal server error",
    })
  }
}
