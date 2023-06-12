// program to reverse a string

const reverse = (str) => {
  let strs = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strs += str[i];
  }
  return strs;
};

console.log(reverse("cat"));
console.log(reverse("1121211"));
console.log(reverse("race car rocket"));

let str = "i am a programmer"
let strs = str.split("").reverse().join("")
console.log(strs);