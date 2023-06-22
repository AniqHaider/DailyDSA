const stringVowel = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count++;
      }
    }
    return count;
  };
  
  let string = "This is a code editter or an IDE that is integrated development enviroment";
  console.log(stringVowel(string)); // 21
  