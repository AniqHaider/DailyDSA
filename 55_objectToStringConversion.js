const convertObjectToString = (obj) => {
  return JSON.stringify(obj);
};

// Example usage
const myObject = { name: "John", age: 30, city: "New York" };
const jsonString = convertObjectToString(myObject);
console.log(jsonString);
