import { jsdom } from "@dependencies"
import { enviroments } from "@config/enviroments.ts"
import { IPrice } from "@interfaces/Product.d.ts"
import { ROOT_TABLE_ID_CONTENT } from "@constants"
import { getTextFromHTMLFragment } from '@utilities/html.ts'

const formatElement = (row: Element) => {
  const cells = row.querySelectorAll("td")
  const entity = cells.item(0)
  const buy = cells.item(1)
  const sell = cells.item(2)
  const rise = cells.item(3)
  const spreed = cells.item(4)
  
  const entityFormatted = getTextFromHTMLFragment(entity.innerHTML).replaceAll("\n", "").trim().replace(/\s+/g, ' ')
  const priceBuyFormatted = Number(
    getTextFromHTMLFragment(buy?.innerHTML).split("\n")[0].replace("$", ""),
  )
  const priceSellFormatted = Number(
    getTextFromHTMLFragment(sell?.innerHTML).split("\n")[0].replace("$", ""),
  )
  const riseEqual = rise?.querySelector(".igual")
  const riseUp = rise?.querySelector(".alza")
  const priceRise = riseEqual ? null : riseUp ? true : false
  const priceRisePercentage = riseEqual
    ? 0
    : Number(getTextFromHTMLFragment(rise?.innerHTML).replace("%", "").replace("=", "").trim())
  const spreedFormatted = Number(
    getTextFromHTMLFragment(spreed?.innerHTML).replace("$", "").trim(),
  )

  return {
    entity: entityFormatted,
    buy: priceBuyFormatted,
    sell: priceSellFormatted,
    priceRise,
    priceRisePercentage,
    spreed: spreedFormatted,
  }
}

export const getPrices = async () => {
  const prices: IPrice[] = []
  const html = await fetch(enviroments.PAGE_URL).then((res) => res.text())
  const document = new jsdom.JSDOM(html).window.document
  const table = document.getElementById(ROOT_TABLE_ID_CONTENT)

  if(table) {
    table.querySelectorAll("tbody tr").forEach((row) => {
      const formattedElement = formatElement(row)
      prices.push(formattedElement)
    })
  }


  return prices
}

export const getPriceByEntity = async (entity: string) => {
  const prices = await getPrices()
  return prices.find((price) => price.entity === entity)
}
