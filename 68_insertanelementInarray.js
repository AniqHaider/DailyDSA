// JavaScript Program to Insert Item in an Array

const insertItemToArray = (array, item, index) => {
  array.splice(index, 0, item);
  return array;
};
let myArray = [1, 2, "e", 4543, 54, 5646, 3, 4, 5];
let itemToInsert = 10;
let insertionIndex = 2;

let newArray = insertItemToArray(myArray, itemToInsert, insertionIndex);
console.log(newArray);
