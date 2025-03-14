const arr = [1, 2, 3, 4, 34, 21, 200, 121, 43, -5, 0];
const maxNumberFunction = (arr) => {
  const maxNumber = Math.max(...arr);
  return maxNumber;
};

console.log(maxNumberFunction(arr)); // 200
