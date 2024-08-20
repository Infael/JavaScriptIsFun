const surprise =
  (...fns) =>
  (input) =>
    fns.reduce((acc, fn) => fn(acc), input);

// explanation

/* 
It’s a pipe function that allows you to chain multiple operations together
by taking a series of functions as arguments
 and applying them in a specific order to the input.

Wow, words.

const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"

// insted of
toUpperCase(removeSpaces(addExclamation("Wtf")))

// we can do
const transform = surprise(toUpperCase, removeSpaces, addExclamation)
transform("Wtf") // WTF!
*/

