const zero = "+[]";
const one = "+!![]";

const number = (n) => Array.from({ length: n }, () => one).join(" + ");

const fromString = (str) =>
  str
    .split("")
    .map((x) => {
      if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString("constructor")}][${fromString(
          "fromCharCode"
        )}](${number(charCode)})`;
      }
      return map[x];
    })
    .join("+");

// fromChadetSingcup[space][backslash]

const map = {};

// x+[] will make x string

// NaN !{}+[]
map.a = `(+{}+[])[${number(1)}]`;
// [Object object] ![]+[]
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[" "] = `({}+[])[${number(7)}]`;

// false ![]+[]
map.f = `(![]+[])[${zero}]`;
map.s = `(![]+[])[${number(3)}]`;
// true !![]+[]
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;

// Infinity (+!![]/+[])+[]
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;

// constructor
// string
map.S = `(([]+[])[${fromString("constructor")}]+[])[${number(9)}]`;
map.i = `(([]+[])[${fromString("constructor")}]+[])[${number(12)}]`;
map.n = `(([]+[])[${fromString("constructor")}]+[])[${number(13)}]`;
map.g = `(([]+[])[${fromString("constructor")}]+[])[${number(14)}]`;
// number
map.u = `((+[])[${fromString("constructor")}]+[])[${number(10)}]`;
map.m = `((+[])[${fromString("constructor")}]+[])[${number(11)}]`;
// RegExp
map.p = `((/-/)[${fromString("constructor")}]+[])[${number(14)}]`;

// toString with non decimal base
map.d = `(${number(13)})[${fromString("toString")}](${number(14)})`;
map.h = `(${number(17)})[${fromString("toString")}](${number(18)})`;

map["\\"] = `(/\\\\/+[])[${number(1)}]`;

// C - function constructor not casted as a string but called instead
//   - it takes string that that represent java script code and it turns it into a function that can be called (like eval)
//   - so we return escape function and we escape backslash that will show it's ascii code that is %5C
map.C = `((()=>{})[${fromString("constructor")}](${fromString(
  "return escape"
)})()(${map["\\"]}))[${number(2)}]`;

const compile = (code) =>
  `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;

console.log(compile('console.log("Hello World!")'));

debugger;

