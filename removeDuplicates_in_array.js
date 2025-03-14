const arr = [2, 3, 2, 4, 3, 55, 32];

const removeDuplicate = (arr) => {
  const withoutDuplicate = [...new Set(arr)];
  return withoutDuplicate;
};

console.log(removeDuplicate(arr));
