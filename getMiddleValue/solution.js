/**
 * Solution
 * -1 is removed from the index calculation for the odd-length array case.
 * Floor does not require adjustment since array indices start at 0.
 **/

function getMiddleValue(arr) {
  arr.sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    const mid1 = arr[arr.length / 2 - 1];
    const mid2 = arr[arr.length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)]; // remove -1
  }
}

const numbers1 = [5, 3, 8, 4, 2];
const numbers2 = [40, 20, 60, 80, 50, 30];

console.log(getMiddleValue(numbers1)); // 4
console.log(getMiddleValue(numbers2)); // 45
