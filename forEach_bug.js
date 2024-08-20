const getCapitalizedInitials = (name) =>
  name
    .trim()
    .split(" ")
    .forEach((name) => name.charAt(0))
    .join("")
    .toUpperCase();

/* Solution
  forEach does not return anything, so the function will return undefined.
  Replace forEach with map.
*/

