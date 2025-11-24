const myObject = {};

const key = Symbol("key");

myObject[key] = "this is the value for the key";

console.log(myObject[Symbol("key")]);
console.log(JSON.stringify(myObject));
