module.exports = function isThereAPairOfNumbers(arr, k) {
  let seen = new Set();

  for (let num of arr) {
    let diff = k - num;
    if (seen.has(diff)) {
      return true;
    }
    seen.add(num);
  }

  return false;
};
