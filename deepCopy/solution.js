// A deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made.
// One approach for deep copying in JavaScript is using JSON.stringify and JSON.parse.
// That kinda works, but it will convert Date objects to strings. To solve this, you can use the structuredClone function (assuming browser support).

function deepCopy(obj) {
  return window.structuredClone(obj);
}
