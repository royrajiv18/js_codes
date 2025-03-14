const arr = [1, 2, 3, 4, 5, 7];

const findMissingNumber = (arr) => {
  const n = arr.length + 1; // as one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, current) => acc + current, 0);
  return expectedSum - actualSum;
};

console.log(findMissingNumber(arr)); // 6
