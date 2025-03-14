const arr = [2, 3, 2, 4, 3, 55, 32];

const removeDuplicate = (arr) => {
  const withoutDuplicate = [...new Set(arr)]; // work for both number and string inputs
  return withoutDuplicate;
};

console.log(removeDuplicate(arr)); // [ 2, 3, 4, 55, 32 ]
