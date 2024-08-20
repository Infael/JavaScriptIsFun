function getId(user, fallback) {
  return user && user.id ?? fallback;
}


// solution
// function getId(user, fallback) {
//   return (user && user.id) ?? fallback;
// }
// or even better
// function getId(user, fallback) {
//   return user?.id ?? fallback;
// }
