const emptyAnArray = (arr) => {
  arr.length = 0;
  return arr;
};

let array1 = [1, 2, 4, 5];
console.log(emptyAnArray(array1));

// const emptyanArray2 = (arr) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr.pop();
//   }
// };
// let array2 = [1, 2, 3, 4, 5];
// console.log(emptyanArray2(array2));
