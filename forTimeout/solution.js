/*
This used to be everyone’s favorite JavaScript interview question.

This code will eventually log 5, 5 times.

The reason for this is because we declared our variable with var, which is function scoped.
By the time our functions given to setTimeout run, i will already be 5 and every function will reference that same variable.

To fix this, use let which is block scoped and will give each iteration of our for loop its own i.
*/
