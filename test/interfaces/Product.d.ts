import { IPrice } from "@interfaces/Product.d.ts"

export interface IPriceAPI extends IPrice {
  id: string
  logo: string
}

export interface IResponsePrices {
  prices: IPriceAPI[]
  referenceExtractedPage: string
  message: string
}

export interface IResponsePrice {
  price: IPriceAPI
  referenceExtractedPage: string
  message: string
}
