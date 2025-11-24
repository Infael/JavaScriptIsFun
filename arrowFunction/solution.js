// Arrow functions don’t have their own this. This leads to three errors in our code.

// First, we’re adding properties to this in the constructor function. Again, because Arrow Functions don’t have their own this, you can’t do that.
// Second, we can’t use the new keyword with an Arrow Function. This will throw a X is not a constructor error.
// Third, we can’t add a property on a function’s prototype if that function is an arrow function, again, because there’s no this.
