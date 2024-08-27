// Solution - deep clone will end in a infinite loop because of circular reference
// to solve this we can use a map to store the reference of the object that we have already cloned:

function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  const copy = Array.isArray(obj) ? [] : {};

  map.set(obj, copy);

  for (const key in obj) {
    copy[key] = deepClone(obj[key], map);
  }

  return copy;
}

const objA = { value: 1 };
const objB = { a: objA };
objA.b = objB;

const clonedObj = deepClone(objA);

