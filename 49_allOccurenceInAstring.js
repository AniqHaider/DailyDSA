const removeOccurence = (str, k) => {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === k) {
        continue;
      } else {
        str2 = str2 + str.charAt(i);
      }
    }
    return str2;
  };
  
  let names = "aniq haider";
  console.log(removeOccurence(names, 'a'));
  