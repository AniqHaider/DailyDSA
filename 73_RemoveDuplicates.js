const removeDuplicates = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const arr1 = removeDuplicates(originalArray);
console.log(arr1);
