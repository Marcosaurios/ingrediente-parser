start
  = read_ingredients

read_ingredients
  = amount:typed_amount (_+)? ingredient:ingredient (_+)? phrase? {
    return {
      amount: amount,
      ingredient: ingredient
    }
  }

// main definitions

// amount:2 type:(_docenas_de_naranja)
// amount:2 type:(kg_de_naranja)
typed_amount
 = amount:amount ws:_? prepositions? _? type:measurament? {
   if (!type) return amount
   if (!ws) return `${amount}${type}`

   return `${amount} ${type}`
 }

measurament
  = ( t:(amount_types/container_types/units) _ prepositions {return t})
  
amount
  = fraction / float / integer

phrase
  = $(word (" " word)*)

word
  = letter+

letter
  = [a-zA-Z]

// TYPES
float
 = $(integer? [.] integer)

fraction
  = $(integer [/] integer)

integer
  = digits:[0-9]+ { return digits.join(''); }

// Units
units 
  = kilogram / gram / liter / milligram / milliliter

gram
  = 'gramos'i
  / 'gramo'i
  / 'gr.'i
  / 'gr'i
  / 'g.'i
  / 'g'i

kilogram
  = 'kilogramos'i / 'kilogramo'i / 'kg.'i / 'kg'i

liter
  = 'litros'i
  / 'litro'i
  / 'l.'i
  / 'l'i

milligram
  = 'milligramos'i
  / 'milligramo'i
  / 'mg.'i
  / 'mg'i

milliliter
  = 'mililitros'i
  / 'millilitro'i
  / 'ml.'i
  / 'ml'i

// Words
ingredient
  = $([A-zÀ-ú]i)+

prepositions 'prepositions'
  = 'de'

_ 'separators'
  = ' '
  / [\t]


// ESP specific
amount_types 'amount_types'
  = 'docenas'i / 'docena'i
  / 'puñaditos'i / 'puñadito'i / "puñado"i

container_types 'container_types'
 = 'vasos' / 'vaso' 
 / 'vasitos' / 'vasito'
 / 'cucharitas' / 'cucharita' / 'cucharadas' / 'cucharada'

