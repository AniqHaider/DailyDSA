// Method 1 -- directly using if, else if, else statements to solve it for a given set of values

let a = 15;
let b = 10;
let c = 71;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}else{
    console.log("No Number Given")
}

// Method 2 -- Same thing but in a function so we use it at different places
 
function logics(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  } else {
    console.log("No Number Given");
  }
}

logics(16, 26, 17);
logics(344419, 344149, 344491);
