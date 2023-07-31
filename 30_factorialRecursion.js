// factorial of a number using recursion

const factorial = (inputNum) => {
  if (inputNum === 0) {  // edge case when we enter zero and base where it stops
    return 1;
  }
  return inputNum * factorial(inputNum - 1);
};

console.log(factorial(7));
console.log(factorial(12));
console.log(factorial(20));
console.log(factorial(0));