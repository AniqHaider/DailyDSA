const mergeAndRemoveDuplicates = (arr1, arr2) => {
  const mergedArray = arr1.concat(arr2);
  return mergedArray.filter(
    (value, index, self) => self.indexOf(value) === index
  );
};

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6, 1, 4];
const mergedUnique = mergeAndRemoveDuplicates(array1, array2);
console.log(mergedUnique);
