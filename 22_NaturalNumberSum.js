num1 = 12;
num2 = 13;

const naturalNumberSum = (n1, n2) => {
  if ((n1 && n2 == 0) || (n1 && n2 < 0)) {
    console.log(`one or both values are not a natural number`);
  } else {
    return n1 + n2;
  }
};

console.log(naturalNumberSum(num1, num2));
naturalNumberSum(12,0);
naturalNumberSum(0,12);