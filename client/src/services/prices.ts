import { enviroment } from '@config/enviroment'
import type { IPrice } from '@interfaces/Prices'

interface IResponsePrices {
  prices: IPrice[]
  referenceExtractedPage: string
  message: string
}

export const getPrices = async () => {
  const response = await fetch(`${enviroment.API_BASE_URL}/prices`)
  const data = await response.json() as IResponsePrices
  return {
    ok: response.ok,
    data
  }
}

interface IResponsePrice {
  price: IPrice
  referenceExtractedPage: string
  message: string
}

export const getPrice = async (id: string) => {
  const response = await fetch(`${enviroment.API_BASE_URL}/prices/${id}`)
  const data = await response.json() as IResponsePrice
  return {
    ok: response.ok,
    data
  }
}
