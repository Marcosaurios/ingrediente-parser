// Generated by Peggy 1.2.0.
//
// https://peggyjs.org/

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var loc = this.location.source + ":" + s.line + ":" + s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", s.line.toString().length);
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1)
          + peg$padEnd("", last - s.column, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = "gramos";
  var peg$c1 = "gramo";
  var peg$c2 = "gr.";
  var peg$c3 = "gr";
  var peg$c4 = "g.";
  var peg$c5 = "g";
  var peg$c6 = "kilogramos";
  var peg$c7 = "kilogramo";
  var peg$c8 = "kg.";
  var peg$c9 = "kg";
  var peg$c10 = "litros";
  var peg$c11 = "litro";
  var peg$c12 = "l.";
  var peg$c13 = "l";
  var peg$c14 = "miligramos";
  var peg$c15 = "miligramo";
  var peg$c16 = "mg.";
  var peg$c17 = "mg";
  var peg$c18 = "mililitros";
  var peg$c19 = "mililitro";
  var peg$c20 = "ml.";
  var peg$c21 = "ml";
  var peg$c22 = "de";
  var peg$c23 = " ";
  var peg$c24 = "docenas";
  var peg$c25 = "docena";
  var peg$c26 = "pu\xF1aditos";
  var peg$c27 = "pu\xF1adito";
  var peg$c28 = "pu\xF1ado";
  var peg$c29 = "vasos";
  var peg$c30 = "vaso";
  var peg$c31 = "vasitos";
  var peg$c32 = "vasito";
  var peg$c33 = "cucharitas";
  var peg$c34 = "cucharita";
  var peg$c35 = "cucharadas";
  var peg$c36 = "cucharada";
  var peg$c37 = "cucharaditas";
  var peg$c38 = "cucharadita";

  var peg$r0 = /^[.]/;
  var peg$r1 = /^[\/]/;
  var peg$r2 = /^[0-9]/;
  var peg$r3 = /^[A-z\xC0-\xFA]/i;
  var peg$r4 = /^[\t]/;

  var peg$e0 = peg$otherExpectation("cantidad");
  var peg$e1 = peg$otherExpectation("medida");
  var peg$e2 = peg$otherExpectation("numero de cantidad");
  var peg$e3 = peg$otherExpectation("decimal");
  var peg$e4 = peg$classExpectation(["."], false, false);
  var peg$e5 = peg$otherExpectation("fraccion");
  var peg$e6 = peg$classExpectation(["/"], false, false);
  var peg$e7 = peg$otherExpectation("entero");
  var peg$e8 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e9 = peg$otherExpectation("unidades");
  var peg$e10 = peg$otherExpectation("gramos");
  var peg$e11 = peg$literalExpectation("gramos", true);
  var peg$e12 = peg$literalExpectation("gramo", true);
  var peg$e13 = peg$literalExpectation("gr.", true);
  var peg$e14 = peg$literalExpectation("gr", true);
  var peg$e15 = peg$literalExpectation("g.", true);
  var peg$e16 = peg$literalExpectation("g", true);
  var peg$e17 = peg$otherExpectation("kilogramo");
  var peg$e18 = peg$literalExpectation("kilogramos", true);
  var peg$e19 = peg$literalExpectation("kilogramo", true);
  var peg$e20 = peg$literalExpectation("kg.", true);
  var peg$e21 = peg$literalExpectation("kg", true);
  var peg$e22 = peg$otherExpectation("litro");
  var peg$e23 = peg$literalExpectation("litros", true);
  var peg$e24 = peg$literalExpectation("litro", true);
  var peg$e25 = peg$literalExpectation("l.", true);
  var peg$e26 = peg$literalExpectation("l", true);
  var peg$e27 = peg$otherExpectation("miligramo");
  var peg$e28 = peg$literalExpectation("miligramos", true);
  var peg$e29 = peg$literalExpectation("miligramo", true);
  var peg$e30 = peg$literalExpectation("mg.", true);
  var peg$e31 = peg$literalExpectation("mg", true);
  var peg$e32 = peg$otherExpectation("mililitro");
  var peg$e33 = peg$literalExpectation("mililitros", true);
  var peg$e34 = peg$literalExpectation("mililitro", true);
  var peg$e35 = peg$literalExpectation("ml.", true);
  var peg$e36 = peg$literalExpectation("ml", true);
  var peg$e37 = peg$otherExpectation("frase");
  var peg$e38 = peg$otherExpectation("ingrediente");
  var peg$e39 = peg$otherExpectation("palabra");
  var peg$e40 = peg$classExpectation([["A", "z"], ["\xC0", "\xFA"]], false, true);
  var peg$e41 = peg$otherExpectation("preposiciones");
  var peg$e42 = peg$literalExpectation("de", false);
  var peg$e43 = peg$otherExpectation("separadores");
  var peg$e44 = peg$literalExpectation(" ", false);
  var peg$e45 = peg$classExpectation(["\t"], false, false);
  var peg$e46 = peg$otherExpectation("otras medidas");
  var peg$e47 = peg$literalExpectation("docenas", true);
  var peg$e48 = peg$literalExpectation("docena", true);
  var peg$e49 = peg$literalExpectation("pu\xF1aditos", true);
  var peg$e50 = peg$literalExpectation("pu\xF1adito", true);
  var peg$e51 = peg$literalExpectation("pu\xF1ado", true);
  var peg$e52 = peg$otherExpectation("recipientes");
  var peg$e53 = peg$literalExpectation("vasos", false);
  var peg$e54 = peg$literalExpectation("vaso", false);
  var peg$e55 = peg$literalExpectation("vasitos", false);
  var peg$e56 = peg$literalExpectation("vasito", false);
  var peg$e57 = peg$literalExpectation("cucharitas", false);
  var peg$e58 = peg$literalExpectation("cucharita", false);
  var peg$e59 = peg$literalExpectation("cucharadas", false);
  var peg$e60 = peg$literalExpectation("cucharada", false);
  var peg$e61 = peg$literalExpectation("cucharaditas", false);
  var peg$e62 = peg$literalExpectation("cucharadita", false);

  var peg$f0 = function(amount, ingredient) {
      return {
        amount: amount,
        ingredient: ingredient
      }
    };
  var peg$f1 = function(amount, ws, type) {
     if (!type) return amount
     if (!ws) return `${amount}${type}`

     return `${amount} ${type}`
   };
  var peg$f2 = function(t) {return t};
  var peg$f3 = function(digits) { return digits.join(''); };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    return {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0;

    s0 = peg$parseread_ingredients();

    return s0;
  }

  function peg$parseread_ingredients() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseamount();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    s2 = [];
    s3 = peg$parse_();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = peg$parseingredient();
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$parse_();
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      s5 = peg$parsephrase();
      if (s5 === peg$FAILED) {
        s5 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f0(s1, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseamount() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsebasic_amount();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s3 = peg$parseprepositions();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = peg$parse_();
      if (s4 === peg$FAILED) {
        s4 = null;
      }
      s5 = peg$parsemeasurament();
      if (s5 === peg$FAILED) {
        s5 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f1(s1, s2, s5);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }

    return s0;
  }

  function peg$parsemeasurament() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseamount_types();
    if (s1 === peg$FAILED) {
      s1 = peg$parsecontainer_types();
      if (s1 === peg$FAILED) {
        s1 = peg$parseunits();
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseprepositions();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f2(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }

    return s0;
  }

  function peg$parsebasic_amount() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parsefraction();
    if (s0 === peg$FAILED) {
      s0 = peg$parsefloat();
      if (s0 === peg$FAILED) {
        s0 = peg$parseinteger();
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }

    return s0;
  }

  function peg$parsefloat() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseinteger();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseinteger();
      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }

    return s0;
  }

  function peg$parsefraction() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseinteger();
    if (s2 !== peg$FAILED) {
      if (peg$r1.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e6); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseinteger();
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }

    return s0;
  }

  function peg$parseinteger() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e8); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e8); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f3(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }

    return s0;
  }

  function peg$parseunits() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parsekilogram();
    if (s0 === peg$FAILED) {
      s0 = peg$parsegram();
      if (s0 === peg$FAILED) {
        s0 = peg$parseliter();
        if (s0 === peg$FAILED) {
          s0 = peg$parsemilligram();
          if (s0 === peg$FAILED) {
            s0 = peg$parsemilliliter();
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }

    return s0;
  }

  function peg$parsegram() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 6).toLowerCase() === peg$c0) {
      s0 = input.substr(peg$currPos, 6);
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e11); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 5).toLowerCase() === peg$c1) {
        s0 = input.substr(peg$currPos, 5);
        peg$currPos += 5;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e12); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 3).toLowerCase() === peg$c2) {
          s0 = input.substr(peg$currPos, 3);
          peg$currPos += 3;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e13); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2).toLowerCase() === peg$c3) {
            s0 = input.substr(peg$currPos, 2);
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e14); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 2).toLowerCase() === peg$c4) {
              s0 = input.substr(peg$currPos, 2);
              peg$currPos += 2;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e15); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 1).toLowerCase() === peg$c5) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e16); }
              }
            }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }

    return s0;
  }

  function peg$parsekilogram() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 10).toLowerCase() === peg$c6) {
      s0 = input.substr(peg$currPos, 10);
      peg$currPos += 10;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e18); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 9).toLowerCase() === peg$c7) {
        s0 = input.substr(peg$currPos, 9);
        peg$currPos += 9;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e19); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 3).toLowerCase() === peg$c8) {
          s0 = input.substr(peg$currPos, 3);
          peg$currPos += 3;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e20); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2).toLowerCase() === peg$c9) {
            s0 = input.substr(peg$currPos, 2);
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e21); }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e17); }
    }

    return s0;
  }

  function peg$parseliter() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 6).toLowerCase() === peg$c10) {
      s0 = input.substr(peg$currPos, 6);
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e23); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 5).toLowerCase() === peg$c11) {
        s0 = input.substr(peg$currPos, 5);
        peg$currPos += 5;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e24); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2).toLowerCase() === peg$c12) {
          s0 = input.substr(peg$currPos, 2);
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e25); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 1).toLowerCase() === peg$c13) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e26); }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e22); }
    }

    return s0;
  }

  function peg$parsemilligram() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 10).toLowerCase() === peg$c14) {
      s0 = input.substr(peg$currPos, 10);
      peg$currPos += 10;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e28); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 9).toLowerCase() === peg$c15) {
        s0 = input.substr(peg$currPos, 9);
        peg$currPos += 9;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e29); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 3).toLowerCase() === peg$c16) {
          s0 = input.substr(peg$currPos, 3);
          peg$currPos += 3;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e30); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2).toLowerCase() === peg$c17) {
            s0 = input.substr(peg$currPos, 2);
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e31); }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e27); }
    }

    return s0;
  }

  function peg$parsemilliliter() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 10).toLowerCase() === peg$c18) {
      s0 = input.substr(peg$currPos, 10);
      peg$currPos += 10;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e33); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 9).toLowerCase() === peg$c19) {
        s0 = input.substr(peg$currPos, 9);
        peg$currPos += 9;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e34); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 3).toLowerCase() === peg$c20) {
          s0 = input.substr(peg$currPos, 3);
          peg$currPos += 3;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e35); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 2).toLowerCase() === peg$c21) {
            s0 = input.substr(peg$currPos, 2);
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e36); }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e32); }
    }

    return s0;
  }

  function peg$parsephrase() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseword();
    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$currPos;
      s6 = peg$parse_();
      if (s6 !== peg$FAILED) {
        s7 = peg$parseword();
        if (s7 !== peg$FAILED) {
          s6 = [s6, s7];
          s5 = s6;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$currPos;
        s6 = peg$parse_();
        if (s6 !== peg$FAILED) {
          s7 = peg$parseword();
          if (s7 !== peg$FAILED) {
            s6 = [s6, s7];
            s5 = s6;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      }
      s3 = [s3, s4];
      s2 = s3;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseword();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parse_();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseword();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseword();
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e37); }
    }

    return s0;
  }

  function peg$parseingredient() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parseword();
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e38); }
    }

    return s0;
  }

  function peg$parseword() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e40); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e40); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e39); }
    }

    return s0;
  }

  function peg$parseprepositions() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 2) === peg$c22) {
      s0 = peg$c22;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e42); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e41); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 32) {
      s0 = peg$c23;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e44); }
    }
    if (s0 === peg$FAILED) {
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e45); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e43); }
    }

    return s0;
  }

  function peg$parseamount_types() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 7).toLowerCase() === peg$c24) {
      s0 = input.substr(peg$currPos, 7);
      peg$currPos += 7;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e47); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 6).toLowerCase() === peg$c25) {
        s0 = input.substr(peg$currPos, 6);
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e48); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 9).toLowerCase() === peg$c26) {
          s0 = input.substr(peg$currPos, 9);
          peg$currPos += 9;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e49); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 8).toLowerCase() === peg$c27) {
            s0 = input.substr(peg$currPos, 8);
            peg$currPos += 8;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e50); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 6).toLowerCase() === peg$c28) {
              s0 = input.substr(peg$currPos, 6);
              peg$currPos += 6;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e51); }
            }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e46); }
    }

    return s0;
  }

  function peg$parsecontainer_types() {
    var s0, s1;

    peg$silentFails++;
    if (input.substr(peg$currPos, 5) === peg$c29) {
      s0 = peg$c29;
      peg$currPos += 5;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e53); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c30) {
        s0 = peg$c30;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e54); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 7) === peg$c31) {
          s0 = peg$c31;
          peg$currPos += 7;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e55); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 6) === peg$c32) {
            s0 = peg$c32;
            peg$currPos += 6;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e56); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 10) === peg$c33) {
              s0 = peg$c33;
              peg$currPos += 10;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e57); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 9) === peg$c34) {
                s0 = peg$c34;
                peg$currPos += 9;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e58); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 10) === peg$c35) {
                  s0 = peg$c35;
                  peg$currPos += 10;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$e59); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 9) === peg$c36) {
                    s0 = peg$c36;
                    peg$currPos += 9;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$e60); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 12) === peg$c37) {
                      s0 = peg$c37;
                      peg$currPos += 12;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$e61); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 11) === peg$c38) {
                        s0 = peg$c38;
                        peg$currPos += 11;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$e62); }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e52); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

export {
  peg$SyntaxError as SyntaxError,
  peg$parse as parse
};
