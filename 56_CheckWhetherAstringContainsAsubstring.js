// JavaScript Program to Check Whether a String Contains a Substring

const checkSubstring = (string, substring) => {
  if (string.includes(substring)) {
    console.log(
      `String "${string}" contains the substring "${substring}".`
    );
  } else {
    console.log(
      `String "${string}" does not contain the substring "${substring}".`
    );
  }
};

checkSubstring("Hello, world!", "wor");
checkSubstring("Hello, world!", "hallo"); 
