let zero = "+![]";
let one = "+!![]";

const number = (n) => (n === 0 ? zero : Array(n).fill(one).join(""));

// infinity
console.log(
  eval("+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]]+[+[]])")
);

