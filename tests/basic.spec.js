import * as parser from "../ingredientes-parser"

  describe("Basic parsing", () => {
    test('should read simplest ingredient OK', () => {
      const r = parser.parse("20 pepinos")
      expect(r.amount).toBe("20")
    })
    test('should read multiple spaced ingredient OK', () => {
      const r = parser.parse("2  naranjas")
      expect(r).toStrictEqual({
        amount: "2",
        ingredient: "naranjas"
      })
    })
  })