const number = 123456.789;

const currencyString = number.toLocaleString("en-In", {
  style: "currency",
  currency: "RUPEE",
});

console.log(currencyString);
