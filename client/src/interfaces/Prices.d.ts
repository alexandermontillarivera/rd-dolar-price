export interface IPrice {
  entity: string
  spreed: number
  buy: number
  sell: number
  id: string
  logo: string
  url: string
  priceRise: boolean | null
  priceRisePercentage: number
}
