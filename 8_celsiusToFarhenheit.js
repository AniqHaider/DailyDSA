// Method 1

let celsiusTemperature = 20;
let b = celsiusTemperature * 1.8 + 32;
console.log(b);

//Method 2 in a arrow function

const tempp = (n) => {
  return (n * 9) / 5 + 32;
};

console.log(
  `The celsius temperature ${celsiusTemperature} degree celsius in farhenheit is ==> ` +
    tempp(celsiusTemperature)
);

// farhenheit to celsius 

let farhenheitTemp = 74;
const celsiusToFarhenheit = (n) => {
  return ((n - 32) * 5) / 9;
};

console.log(celsiusToFarhenheit(farhenheitTemp));
