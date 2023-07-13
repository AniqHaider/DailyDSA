const hcf_two_numbers = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") return false; // checking if input is number or not
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
};

console.log(hcf_two_numbers(96, 56));
console.log(hcf_two_numbers('37', 39));
console.log(hcf_two_numbers(37, 39));
