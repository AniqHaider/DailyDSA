// js program to merge two objects

const mergeObjects = (obj1, obj2) => {
  return Object.assign({}, obj1, obj2);
};

var object1 = { a: 1, b: 2 };
var object2 = { c: 3, d: 4 };

var mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); 
