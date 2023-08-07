// program to add key value pair in js

const addKeyValue = (obj, key, val) => {
  obj[key] = val;
};

let myObject = {
  name: "Aniq",
  age: 22,
  city: "Varnasi",
};

addKeyValue(myObject, "state", "Uttar Pradesh");
console.log(myObject);
