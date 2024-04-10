import { asserts } from '@test-dependencies'
import {} from '@test-utils'

Deno.test("Sum two numbers", () => {
  asserts.assertEquals(1 + 2, 3)
})