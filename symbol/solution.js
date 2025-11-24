const myObject = {};

const key = Symbol("key");

myObject[key] = "this is the value for the key";

console.log(myObject[Symbol("key")]);
console.log(JSON.stringify(myObject));

/**
 * 1. undefined - The Symbol constructor creates a unique value, so the Symbol used to set the value of myObject[key] is not the same as the Symbol used to get the value of myObject[key].
 * 2. {} - JSON.stringify ignores Symbol properties when stringifying an object.
 *
 * This is useful for creating private properties on objects that can’t be accessed or modified outside of the object.
 * You can read more about Symbols here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */

