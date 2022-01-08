import * as parser from "../ingredientes-parser"

describe("Units parsing tests", () => {
  
  describe("Simple units", () => {

    test('should read empty amounts OK', () => {
      const r = parser.parse("naranja")
      expect(r).toStrictEqual({
        amount: null,
        ingredient: "naranja"
      })
    })

    test('should read units OK', () => {
      const r = parser.parse("2 kg de naranja")
      expect(r).toStrictEqual({
        amount: "2 kg",
        ingredient: "naranja"
      })
    })

    test('should read kg units without space OK', () => {
      const r = parser.parse("2kg de naranja")
      expect(r).toStrictEqual({
        amount: "2kg",
        ingredient: "naranja"
      })
    })

    test('should read liters units OK', () => {
      const r = parser.parse("2L de naranja")
      expect(r).toStrictEqual({
        amount: "2L",
        ingredient: "naranja"
      })
    })

    test('should read other units strict OK', () => {
      const r = parser.parse("2L. de leche")
      expect(r).toStrictEqual({
        amount: "2L.",
        ingredient: "leche"
      })
    })

    test('should read custom amounts OK', () => {
      const r = parser.parse("2 docenas de naranja")
      expect(r).toStrictEqual({
        amount: "2 docenas",
        ingredient: "naranja"
      })
    })

    test('should read more custom amounts OK', () => {
      const r = parser.parse("50 cucharadas de aceite")
      expect(r).toStrictEqual({
        amount: "50 cucharadas",
        ingredient: "aceite"
      })
    })
  })

  describe("Fraction units parsing", () => {
    test('should read fraction amounts OK', () => {
      const r = parser.parse("1/4 tomate")
      expect(r).toStrictEqual({
        amount: "1/4",
        ingredient: "tomate"
      })
    })
  
    test('should read fraction amount + preposition OK', () => {
      const r = parser.parse("1/4 de tomate")
      expect(r).toStrictEqual({
        amount: "1/4",
        ingredient: "tomate"
      })
    })
  
    test('should read fraction + units amounts OK', () => {
      const r = parser.parse("1/2 kg de tomate")
      expect(r).toStrictEqual({
        amount: "1/2 kg",
        ingredient: "tomate"
      })
    })
  
    test('should read fraction + units without space OK', () => {
      const r = parser.parse("1/2kg de tomate")
      expect(r).toStrictEqual({
        amount: "1/2kg",
        ingredient: "tomate"
      })
    })
  })

  describe("Edge cases", () => {
    test("Pax", () => {
      const r = parser.parse("2 puñaditos de sal por persona")
      expect(r).toStrictEqual({
        ingredient: "sal",
        amount: "2 puñaditos"
      })
    })


  })
})
