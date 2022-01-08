import * as parser from "../ingredientes-parser"

  describe("Basic parsing", () => {

    test('should read simplest ingredient OK', () => {
      const r = parser.parse("20 pepinos")
      expect(r.amount).toBe("20")
    })

    test('should read spaced ingredient OK', () => {
      const r = parser.parse("2  naranjas")
      expect(r).toStrictEqual({
        amount: "2",
        ingredient: "naranjas"
      })
    })

    test('should read an empty ingredient OK', () => {
      const r = parser.parse("naranjas")
      expect(r).toStrictEqual({
        amount: null,
        ingredient: "naranjas"
      })
    })

    test('should read an empty ingredient accented OK', () => {
      const r = parser.parse("limón")
      expect(r).toStrictEqual({
        amount: null,
        ingredient: "limón"
      })
    })

    test('should read ingredient accented OK', () => {
      const r = parser.parse("límónádúróé por ración de ñora")
      expect(r).toStrictEqual({
        amount: null,
        ingredient: "límónádúróé"
      })
    })

  })