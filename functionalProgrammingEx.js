const radiusArray = [3, 1, 2, 4];

// area of the circle
const area = (radius) => Math.PI * radius * radius;

// circumference of a circle
const circumference = (radius) => 2 * Math.PI * radius;

// diameter of a circle
const diameter = (radius) => 2 * radius;

// calculate function

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radiusArray, area));
console.log(calculate(radiusArray, circumference));
console.log(calculate(radiusArray, diameter));

/*
[
  28.274333882308138,
  3.141592653589793,
  12.566370614359172,
  50.26548245743669
]
[
  18.84955592153876,
  6.283185307179586,
  12.566370614359172,
  25.132741228718345
]
[ 6, 2, 4, 8 ]
*/
