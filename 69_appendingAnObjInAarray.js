const appendObjectToArray = (array, object) => {
  array.push(object);
  return array;
};
let myArray = [
  { name: "Aniq", age: 23 },
  { name: "Rahul", age: 22 },
];

let newObject = { name: "Shubham", age: 24 };

let newArray = appendObjectToArray(myArray, newObject);
console.log(newArray);
