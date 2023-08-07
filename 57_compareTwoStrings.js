// js program to perform string comparison

const compareStr = (string1, string2) => {
  const result = string1.toUpperCase() === string2.toUpperCase();

  if (result) {
    console.log("The strings are similar.");
  } else {
    console.log("The strings are not similar.");
  }
};


const s1 = "a JavaScript__ Program";
const s2 = "a javascript__ program";

compareStr(s1, s2);