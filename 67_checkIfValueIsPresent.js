// Value present in an array

const valueIsPresent = (arr, n, x) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
};

let arr = [12, 45, 6, "hmm", 3, 43, 2, 342, "&nbsp", "xyz"];

console.log(valueIsPresent(arr, arr.length, "hmm"));

console.log(valueIsPresent(arr, arr.length, 342));

console.log(valueIsPresent(arr, arr.length, "nbsp"));

console.log(valueIsPresent(arr, arr.length, "xyz"));
