import { asserts } from '@test-dependencies'

Deno.test("Sum two numbers", () => {
  asserts.assertEquals(1 + 2, 3)
})