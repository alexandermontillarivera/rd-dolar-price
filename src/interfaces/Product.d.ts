export interface IPrice {
  entity: string
  spreed: number
  buy: number
  sell: number
  priceRise: boolean | null
  priceRisePercentage: number
}
