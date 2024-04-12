import { getTextFromHTMLFragment } from '@/utilities/html.ts'
import { asserts } from "@test-dependencies"

Deno.test("getTextFromHTMLFragment should return a string", () => {
  const html = "<div>Test</div>"
  const text = getTextFromHTMLFragment(html)
  asserts.assertEquals(text, "Test", "Expected 'Test'")
})
