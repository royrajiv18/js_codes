const arr = [1, 20, 32, 54, 21, 66, 23, 200, 10];

function findMax(arr) {
  const output = arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, arr[0]);
  return output;
}

console.log(findMax(arr));

//o/p 200
