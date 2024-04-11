import { puppeteer, jsdom } from "@dependencies"
import { enviroments } from "@config/enviroments.ts"
import { IPrice } from "@interfaces/Product.d.ts"
import { ROOT_TABLE_ID_CONTENT } from "@constants"

const formatElement = (row: Element) => {
  const cells = row.querySelectorAll("td")
  const entity = cells.item(0)
  const buy = cells.item(1)
  const sell = cells.item(2)
  const rise = cells.item(3)
  const spreed = cells.item(4)
  
  const x = row.querySelectorAll("td")

  x.forEach((cell) => {
    console.log(cell.innerText)
  })

  // const entityFormatted = entity.innerText.trim().replaceAll("\n", "")
  // const priceBuyFormatted = Number(
  //   buy?.innerText.split("\n")[0].replace("$", ""),
  // )
  // const priceSellFormatted = Number(
  //   sell?.innerText.split("\n")[0].replace("$", ""),
  // )
  // const riseEqual = rise?.querySelector(".igual")
  // const riseUp = rise?.querySelector(".alza")
  // const priceRise = riseEqual ? null : riseUp ? true : false
  // const priceRisePercentage = riseEqual
  //   ? 0
  //   : Number(rise?.innerText.replace("%", "").replace("=", "").trim())
  // const spreedFormatted = Number(
  //   spreed?.innerText.replace("$", "").trim(),
  // )

  // return {
  //   entity: entityFormatted,
  //   buy: priceBuyFormatted,
  //   sell: priceSellFormatted,
  //   priceRise,
  //   priceRisePercentage,
  //   spreed: spreedFormatted,
  // }
}

export const getPrices = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(enviroments.PAGE_URL)

  const html = await fetch(enviroments.PAGE_URL).then((res) => res.text())

  const document = new jsdom.JSDOM(html).window.document


  const table = document.getElementById(ROOT_TABLE_ID_CONTENT)

  const prices: IPrice[] = []

  if(table) {
    table.querySelectorAll("tbody tr").forEach((row) => {
      const formattedElement = formatElement(row)
      console.log(formattedElement)
      prices.push(formattedElement)
    })

  }

  // const result = await page.evaluate((ROOT_TABLE_ID_CONTENT) => {
  //   const formatElement = (row: HTMLTableRowElement) => {
  //     const cells = row.querySelectorAll("td") as NodeListOf<
  //       HTMLTableCellElement
  //     >
  //     const [
  //       entity,
  //       buy,
  //       sell,
  //       rise,
  //       spreed,
  //     ] = cells

  //     const entityFormatted = entity?.innerText.trim().replaceAll("\n", "")
  //     const priceBuyFormatted = Number(
  //       buy?.innerText.split("\n")[0].replace("$", ""),
  //     )
  //     const priceSellFormatted = Number(
  //       sell?.innerText.split("\n")[0].replace("$", ""),
  //     )
  //     const riseEqual = rise?.querySelector(".igual")
  //     const riseUp = rise?.querySelector(".alza")
  //     const priceRise = riseEqual ? null : riseUp ? true : false
  //     const priceRisePercentage = riseEqual
  //       ? 0
  //       : Number(rise?.innerText.replace("%", "").replace("=", "").trim())
  //     const spreedFormatted = Number(
  //       spreed?.innerText.replace("$", "").trim(),
  //     )

  //     return {
  //       entity: entityFormatted,
  //       buy: priceBuyFormatted,
  //       sell: priceSellFormatted,
  //       priceRise,
  //       priceRisePercentage,
  //       spreed: spreedFormatted,
  //     }
  //   }

  //   const table = document.getElementById(
  //     ROOT_TABLE_ID_CONTENT,
  //   ) as HTMLTableElement

  //   const prices: IPrice[] = []

  //   if (table) {
  //     const rows = table.querySelectorAll("tbody tr") as NodeListOf<
  //       HTMLTableRowElement
  //     >

  //     rows.forEach((row) => {
  //       const formattedElement = formatElement(row)
  //       prices.push(formattedElement)
  //     })
  //   }

  //   return prices
  // }, ROOT_TABLE_ID_CONTENT)

  await page.close()
  await browser.close()

  return []
}

export const getPriceByEntity = async (entity: string) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(enviroments.PAGE_URL)

  const result = await page.evaluate(
    ({ ROOT_TABLE_ID_CONTENT, entityName }) => {
      const formatElement = (row: HTMLTableRowElement) => {
        const cells = row.querySelectorAll("td") as NodeListOf<
          HTMLTableCellElement
        >
        const [
          entity,
          buy,
          sell,
          rise,
          spreed,
        ] = cells

        const entityFormatted = entity?.innerText.trim().replaceAll("\n", "")
        const priceBuyFormatted = Number(
          buy?.innerText.split("\n")[0].replace("$", ""),
        )
        const priceSellFormatted = Number(
          sell?.innerText.split("\n")[0].replace("$", ""),
        )
        const riseEqual = rise?.querySelector(".igual")
        const riseUp = rise?.querySelector(".alza")
        const priceRise = riseEqual ? null : riseUp ? true : false
        const priceRisePercentage = riseEqual
          ? 0
          : Number(rise?.innerText.replace("%", "").replace("=", "").trim())
        const spreedFormatted = Number(
          spreed?.innerText.replace("$", "").trim(),
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

      const table = document.getElementById(
        ROOT_TABLE_ID_CONTENT,
      ) as HTMLTableElement

      const rows = Array.from(table.querySelectorAll("tbody tr"))

      const foundElementIndex = rows.findIndex((row) => {
        const cells = row.querySelectorAll("td") as NodeListOf<
          HTMLTableCellElement
        >
        const entityFormatted = cells[0]?.innerText.replace(/"\n"/g, "")
        return entityFormatted === entityName
      })

      if (foundElementIndex === -1) {
        return null
      }

      const row = rows[foundElementIndex] as HTMLTableRowElement

      return formatElement(row)
    },
    {
      ROOT_TABLE_ID_CONTENT,
      entityName: entity,
    },
  )

  await page.close()
  await browser.close()

  return result
}
