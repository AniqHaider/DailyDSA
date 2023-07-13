const fibonacci = (num) => {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const fibDriver = (n) => {
  if (n <= 0) {
    console.log("Enter a positive number greater than 0");
  } else {
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i));
    }
  }
};

fibDriver(10);
fibDriver(0);
fibDriver(14);
