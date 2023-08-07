const randomElement = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  console.log(arr[i]);
};

let array1 = [12, 3, 4, 5, 34, 63, 45, 0];

randomElement(array1);
