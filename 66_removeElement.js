// JavaScript Program to Remove Specific Item From an Array

const removeElement = (arr, n, x) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      arr.splice(i, 1);
      i--;
      n--;
    }
  }
  return arr;
};

let arr = [2, 3, 4, 5, 6];
console.log(removeElement(arr, arr.length, 4));
