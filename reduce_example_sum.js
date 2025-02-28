const arr = [1, 2, 3, 4, 5];
function findSum(arr) {
  const output = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);
  return output;
}

console.log(findSum(arr));

// o/p 15
