start
  = read_ingredients

read_ingredients
  = amount:amount? (_+)? ingredient:ingredient (_+)? phrase? {
    return {
      amount: amount,
      ingredient: ingredient
    }
  }

// main definitions

// amount:2 type:(_docenas_de_naranja)
// amount:2 type:(kg_de_naranja)
amount 'cantidad'
 = amount:basic_amount ws:_? prepositions? _? type:measurament? {
   if (!type) return amount
   if (!ws) return `${amount}${type}`

   return `${amount} ${type}`
 }

measurament 'medida'
  = ( t:(amount_types/container_types/units) _ prepositions {return t})
  
basic_amount 'numero de cantidad'
  = fraction / float / integer


// TYPES
float 'decimal'
 = $(integer? [.] integer)

fraction 'fraccion'
  = $(integer [/] integer)

integer 'entero'
  = digits:[0-9]+ { return digits.join(''); }

// Units
units 'unidades'
  = kilogram / gram / liter / milligram / milliliter

gram 'gramos'
  = 'gramos'i
  / 'gramo'i
  / 'gr.'i
  / 'gr'i
  / 'g.'i
  / 'g'i

kilogram 'kilogramo'
  = 'kilogramos'i / 'kilogramo'i / 'kg.'i / 'kg'i

liter 'litro'
  = 'litros'i
  / 'litro'i
  / 'l.'i
  / 'l'i

milligram 'miligramo'
  = 'miligramos'i
  / 'miligramo'i
  / 'mg.'i
  / 'mg'i

milliliter 'mililitro'
  = 'mililitros'i
  / 'mililitro'i
  / 'ml.'i
  / 'ml'i

// Words
phrase 'frase'
  = $(word (_ word)*)+

ingredient 'ingrediente'
 = word

word 'palabra'
  = $([A-zÀ-ú]i)+

prepositions 'preposiciones'
  = 'de'

_ 'separadores'
  = ' '
  / [\t]


// ESP specific
amount_types 'otras medidas'
  = 'docenas'i / 'docena'i
  / 'puñaditos'i / 'puñadito'i / 'puñado'i

container_types 'recipientes'
 = 'vasos'i / 'vaso'i 
 / 'vasitos'i / 'vasito'
 / 'cucharitas'i / 'cucharita'i / 'cucharadas'i / 'cucharada'i / 'cucharaditas'i / 'cucharadita'i

