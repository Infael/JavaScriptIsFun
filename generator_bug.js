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

/* Solution
  userGenerator will stop at the first user that is not active because of the return statement on line 4.
  Unstead of return, we should use continue to skip the current iteration and move on to the next one.
*/
