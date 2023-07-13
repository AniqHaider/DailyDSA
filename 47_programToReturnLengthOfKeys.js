// program to return number of keys in js

const countProperties = (obj) => {
  return Object.keys(obj).length;
};
var object1 = { a: 1, b: 2, c: 3, d: "a", e: "#" };
var object2 = {
  g: 1,
  k: 2,
  n: 3,
  a: 1,
  b: 2,
  c: 3,
  d: "a",
  e: "#",
  j: "a",
  l: "#",
};
var numberOfKeys = countProperties(object1);
console.log(numberOfKeys);
console.log(countProperties(object2));
