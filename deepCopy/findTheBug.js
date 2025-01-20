function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const user = {
  name: "Tyler",
  age: 32,
  created: new Date(),
};

const copiedUser = deepCopy(user);
