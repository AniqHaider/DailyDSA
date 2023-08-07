const addElement = (a, arr) => {
  arr.unshift(a);
  return arr;
};

let array1 = [1, 2, 3, 4];
console.log(addElement(0, array1));
