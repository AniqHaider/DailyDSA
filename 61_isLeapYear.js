// Program to check if its leap year

const isLeapYear = (num) => {
  if (num % 4 == 0) {
    console.log(`${num} is a leap year`);
  } else {
    console.log(`${num} is not a leap year`);
  }
};

let year1 = 2023;
let year2 = 2024;

isLeapYear(year1);
isLeapYear(year2);
