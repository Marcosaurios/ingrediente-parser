import * as parser from "../ingredientes-parser"

test('should be true', () => {
  expect(true).toBe(true)
})

test('should be true 2', () => {
  const res = parser.parse("2 * (2+2)")
  expect(res).toBe(8)
})
