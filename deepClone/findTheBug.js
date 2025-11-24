function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const objA = { value: 1 };
const objB = { a: objA };
objA.b = objB;

const clonedObj = deepClone(objA);
