num1 = 12;
num2 = 22;

// declaring function and usind modulus logic to get the value of last digit
const sameLastDigit = (n1, n2) => {
  if (n1 % 10 == n2 % 10) {
    console.log(`${n1} & ${n2} have same last digit`);
  } else {
    console.log(`${n1} and ${n2} don't have same last digit`);
  }
};

// test cases
sameLastDigit(num1, num2);
sameLastDigit(223, 18);
sameLastDigit(2213247,7)