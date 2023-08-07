const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const array1 = [1, 2, 3, 7, 8, 4];
const array2 = [1, 2, 3, 7, 8, 4];
const array3 = [1, 2, 4, 8, 3, 7];

console.log(areArraysEqual(array1, array2));
console.log(areArraysEqual(array1, array3));
