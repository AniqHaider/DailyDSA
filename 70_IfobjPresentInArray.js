// JavaScript Program to Check if An Object is An Array

const checkIfArray = (obj) => {
  return Array.isArray(obj);
};
let myArray = [1, 2, 3, 4, 5];
let myObject = { name: "John", age: 25 };


console.log(checkIfArray(myArray));
console.log(checkIfArray(myObject));
