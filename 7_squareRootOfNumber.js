// To find square root of a number

// method 1

let a = 4;
console.log(Math.sqrt(a));

// Method 2 -- Only works for perfect squares if a number is not a perfect square it will return the nearly square to that for example 34 returns 5 before 6 square is 36 , but 5 sqaure is 25 and is nearest perfect sqaure to 6

const squareRoot = (n) => {
  if (n == 0 || n == 1) {
    return n;
  }
  let i = 1;
  let result = 1;
  while (result <= n) {
    i++;
    result = i * i;
  }
  return i - 1;
};

console.log(squareRoot(16));
console.log(squareRoot(34));
