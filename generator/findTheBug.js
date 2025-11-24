function* userGenerator(users) {
  for (let user of users) {
    if (!user.isActive) {
      return;
    }
    yield user;
  }
}

const users = [
  { name: "Ben", isActive: true },
  { name: "Alex", isActive: false },
  { name: "Tyler", isActive: true },
];

const gen = userGenerator(users);

for (let user of gen) {
  console.log(user);
}

