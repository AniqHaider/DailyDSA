const capitalFirstLetter = (str) => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

let string = "hello world";
console.log(capitalFirstLetter(string));
