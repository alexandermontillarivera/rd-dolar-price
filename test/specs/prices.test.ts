import { IResponseErrorMessage } from "@test-interfaces/API.d.ts"
import { asserts } from "@test-dependencies"
import { STORAGE } from "@test-constants"
import { GET, parseStorageJSONItem, randomString } from "@test-utils"
import {
  IPriceAPI,
  IResponsePrice,
  IResponsePrices,
} from "@test-interfaces/Product.d.ts"

Deno.test("GET / should return 200", async () => {
  const response = await GET("/")
  const body = await response.json()
  asserts.assertEquals(response.status, 200, "Expected status 200")
  asserts.assertEquals(
    body,
    { message: "Welcome to the API" },
    "Expected message",
  )
})

Deno.test("GET /api/prices should return 200", async () => {
  const response = await GET("/api/prices")
  await response.body?.cancel()
  asserts.assertEquals(response.status, 200, "Expected status 200")
})

Deno.test("GET /api/prices should a return json data", async () => {
  const response = await GET("/api/prices")
  const body = await response.json()
  asserts.assertEquals(response.status, 200, "Expected status 200")

  const havePrices = Object.hasOwn(body, "prices")
  const haveReferenceExtractedPage = Object.hasOwn(
    body,
    "referenceExtractedPage",
  )
  const haveMessage = Object.hasOwn(body, "message")

  asserts.assert(havePrices, "Have a prices array key")
  asserts.assert(
    haveReferenceExtractedPage,
    "Have a referenceExtractedPage key",
  )
  asserts.assert(haveMessage, "Have a message key")
})

Deno.test("GET /api/prices should a format json data", async () => {
  const response = await GET("/api/prices")
  const body: IResponsePrices = await response.json()
  asserts.assertEquals(response.status, 200, "Expected status 200")

  const { prices, message, referenceExtractedPage } = body

  const isHaveAllPricesProperties = prices.every((price) => {
    const haveEntity = Object.hasOwn(price, "entity")
    const haveBuyPrice = Object.hasOwn(price, "buy")
    const haveSellPrice = Object.hasOwn(price, "sell")
    const havePriceRise = Object.hasOwn(price, "priceRise")
    const havePriceRisePercentage = Object.hasOwn(price, "priceRisePercentage")
    const haveId = Object.hasOwn(price, "id")
    const haveLogo = Object.hasOwn(price, "logo")
    const haveUrl = Object.hasOwn(price, "url")

    return haveEntity && haveBuyPrice && haveSellPrice && havePriceRise &&
      havePriceRisePercentage && haveId && haveLogo && haveUrl
  })

  const isValidValuesPricesProperties = prices.every((price) => {
    const isEntityString = typeof price.entity === "string"
    const isBuyPriceNumber = typeof price.buy === "number"
    const isSellPriceNumber = typeof price.sell === "number"
    const isPriceRiseBooleanOrNull = typeof price.priceRise === "boolean" ||
      price.priceRise === null
    const isPriceRisePercentageNumber =
      typeof price.priceRisePercentage === "number"
    const isIdString = typeof price.id === "string"
    const isLogoString = typeof price.logo === "string"
    const logoIsUrl = new URL(price.logo)
    const isUrlStringURL = new URL(price.url)

    return isEntityString && isBuyPriceNumber && isSellPriceNumber &&
      isPriceRiseBooleanOrNull && isPriceRisePercentageNumber && isIdString &&
      isLogoString && logoIsUrl && isUrlStringURL
  })

  const isReferenceExtractedPageString =
    typeof referenceExtractedPage === "string"
  const isMessageString = typeof message === "string"

  asserts.assert(Array.isArray(prices), "Prices is an array")
  asserts.assert(isHaveAllPricesProperties, "Prices have all properties")
  asserts.assert(isValidValuesPricesProperties, "Prices have valid values")
  asserts.assert(
    isReferenceExtractedPageString,
    "ReferenceExtractedPage is a string",
  )
  asserts.assert(isMessageString, "Message is a string")

  const randomItem = prices[Math.floor(Math.random() * prices.length)]

  localStorage.setItem(STORAGE.ITEM_PRICE, JSON.stringify(randomItem))
})

Deno.test("GET /api/prices/:id should return 200", async () => {
  const item = parseStorageJSONItem<IPriceAPI>("ITEM_PRICE")
  const response = await GET(`/api/prices/${item.id}`)
  await response.body?.cancel()
  asserts.assertEquals(response.status, 200, "Expected status 200")
})

Deno.test("GET /api/prices/:id should a return json data", async () => {
  const item = parseStorageJSONItem<IPriceAPI>("ITEM_PRICE")
  const response = await GET(`/api/prices/${item.id}`)
  const body: IResponsePrice = await response.json()
  asserts.assertEquals(response.status, 200, "Expected status 200")

  const { price, message, referenceExtractedPage } = body

  const haveEntity = Object.hasOwn(price, "entity")
  const haveBuyPrice = Object.hasOwn(price, "buy")
  const haveSellPrice = Object.hasOwn(price, "sell")
  const havePriceRise = Object.hasOwn(price, "priceRise")
  const havePriceRisePercentage = Object.hasOwn(price, "priceRisePercentage")
  const haveId = Object.hasOwn(price, "id")
  const haveLogo = Object.hasOwn(price, "logo")
  const haveUrl = Object.hasOwn(price, "url")

  const isEntityString = typeof price.entity === "string"
  const isBuyPriceNumber = typeof price.buy === "number"
  const isSellPriceNumber = typeof price.sell === "number"
  const isPriceRiseBooleanOrNull = typeof price.priceRise === "boolean" || price.priceRise === null
  const isPriceRisePercentageNumber = typeof price.priceRisePercentage === "number"
  const isIdString = typeof price.id === "string"
  const isLogoString = typeof price.logo === "string"
  const logoIsUrl = new URL(price.logo)
  const isUrlStringURL = new URL(price.url)

  const isReferenceExtractedPageString =
    typeof referenceExtractedPage === "string"
  const isMessageString = typeof message === "string"

  asserts.assert(haveEntity, "Have a entity key")
  asserts.assert(haveBuyPrice, "Have a buy key")
  asserts.assert(haveSellPrice, "Have a sell key")
  asserts.assert(havePriceRise, "Have a priceRise key")
  asserts.assert(havePriceRisePercentage, "Have a priceRisePercentage key")
  asserts.assert(haveId, "Have a id key")
  asserts.assert(haveLogo, "Have a logo key")
  asserts.assert(haveUrl, "Have a url key")

  asserts.assert(isEntityString, "Entity is a string")
  asserts.assert(isBuyPriceNumber, "Buy is a number")
  asserts.assert(isSellPriceNumber, "Sell is a number")
  asserts.assert(isPriceRiseBooleanOrNull, "PriceRise is a boolean or null")
  asserts.assert(isPriceRisePercentageNumber, "PriceRisePercentage is a number")
  asserts.assert(isIdString, "Id is a string")
  asserts.assert(isLogoString, "Logo is a string")
  asserts.assert(logoIsUrl, "Logo is a valid url")
  asserts.assert(isUrlStringURL, "Url is a valid url")

  asserts.assert(
    isReferenceExtractedPageString,
    "ReferenceExtractedPage is a string",
  )
  asserts.assert(isMessageString, "Message is a string")
})

Deno.test("GET /api/prices/:id should a equal json data", async () => {
  const item = parseStorageJSONItem<IPriceAPI>("ITEM_PRICE")
  const response = await GET(`/api/prices/${item.id}`)
  const body: IResponsePrice = await response.json()
  asserts.assertEquals(response.status, 200, "Expected status 200")
  asserts.assertEquals(body.price, item, "Expected price")
})

Deno.test("GET /api/prices/:randomId should return 404", async () => {
  const id = randomString()
  const response = await GET(`/api/prices/${id}`)
  await response.body?.cancel()
  asserts.assertEquals(response.status, 404, "Expected status 404")
})

Deno.test("GET /api/prices/:randomId should message data json 404 error", async () => {
  const id = randomString()
  const response = await GET(`/api/prices/${id}`)
  const body: IResponseErrorMessage = await response.json()
  const haveAMessageKey = Object.hasOwn(body, "message")
  asserts.assertEquals(response.status, 404, "Expected status 404")
  asserts.assert(haveAMessageKey, "Have a message key")
  asserts.assertEquals(body.message, "Entity not found", "Expected message")
})

Deno.test("GET /api/prices/logo/:id should return 200", async () => {
  const item = parseStorageJSONItem<IPriceAPI>("ITEM_PRICE")
  const response = await GET(`/api/prices/logo/${item.id}`)
  await response.body?.cancel()
  asserts.assertEquals(response.status, 200, "Expected status 200")
})

Deno.test("GET /api/prices/logo/:id should a return image data", async () => {
  const item = parseStorageJSONItem<IPriceAPI>("ITEM_PRICE")
  const response = await GET(`/api/prices/logo/${item.id}`)
  const blob = await response.blob()
  asserts.assertEquals(response.status, 200, "Expected status 200")
  asserts.assertEquals(blob.type, "image/png", "Expected image type")
})

Deno.test("GET /api/prices/logo/:randomId should return 404", async () => {
  const response = await GET(`/api/prices/logo/random`)
  await response.body?.cancel()
  asserts.assertEquals(response.status, 404, "Expected status 404")
})
