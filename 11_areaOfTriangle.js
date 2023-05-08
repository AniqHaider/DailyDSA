// Program to find Area of Triangle ...

let length = 50;  // length of the triangle of one side.
let height = 70; // distance to one of the corner or where two edges meet from middle of the above length

const areaOfTriangle = (a, b) => {  // height width as params
  return (a * b * 1) / 2;    // returning the result as per the area of the triangle
};

console.log(areaOfTriangle(length, height)); // returns 1750
