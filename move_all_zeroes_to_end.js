const arr = [0, 2, 0, 3, 0, 0, 3, 4, 5, 2];

const moveAllZeroes = (arr) => {
  let nonZeroIndex = 0; // position to place the next non zero element

  // move non zero elements forward

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // swap
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
  }
  return arr;
};

console.log(moveAllZeroes(arr)); // [2, 3, 3, 4, 5, 2, 0, 0, 0, 0 ]
