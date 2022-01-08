[![npm](https://img.shields.io/npm/v/ingrediente-parser?color=green-light)](https://www.npmjs.com/package/ingrediente-parser)


# ingrediente-parser
Paquete NPM para parsear ingredientes de recetas en español. Usa PEGGYjs (basado en [PEG](https:/en.wikipedia.org/wiki/Parsing_expression_grammar)) para crear el parser que detecta los ingredientes.

La lectura de los ingredientes se realiza siguiendo el formato: (cantidad) (ingrediente). Ejemplos:

| input | output |
| --- | --- |
| 20 tomates | `{amount: "20", ingredient: "tomates"}` |
| 200gr de arroz | `{amount: "200gr", ingredient: "arroz"}` |
| 200 gr de ñoras | `{amount: "200 gr", ingredient: "ñoras"}` |
| 2 vasos de arroz por cabeza | `{amount: "2 vasos", ingredient: "arroz"}` |
| sal | `{amount: null, ingredient: "sal"}` |

## Cantidades
- Unidades (son case insensitive)
  - `kilogramos` | `kilogramo` | `kg.` | `kg`
  - `miligramos` | `miligramo` | `mg.` | `mg`
  - `litros` | `litro` | `l.` | `l`
  - `mililitros` | `mililitro` | `ml.` | `ml`
- Otras unidades (sólo españolas, case insensitive)
  - `docenas` | `docena` | `puñaditos` | `puñadito` | `puñado`
  - `vasos` | `vaso` | `vasitos` | `vasito` | `cucharitas` | `cucharita` | `cucharadas` | `cucharada` | `cucharaditas` | `cucharadita`



## Desarrollo
- `npm run test`: Corre los tests.
- `npm run test-watch`: Corre los tests en modo watch. Puedes aplicar cambios en el compilador y automaticamente corre todos los tests.
- `npm run build`: Crea el parser

Si deseas realizar algún cambio o mejora, adelante!
