let num = 25;

// method 1

function sqRoot(n) {
  if (n < 0) {
    console.log("negative number");
  } else {
    return n ** 0.5;
  }
}
console.log("Method one here :")
console.log(sqRoot(36));
console.log(sqRoot(0.5));
console.log(sqRoot(num));

// Method 2

function sqrts(n){
    console.log(Math.sqrt(n))
}
console.log("Method 2 here :")
sqrts(121);
sqrts(num);
sqrts(36);

