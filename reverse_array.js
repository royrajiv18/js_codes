// reverse an array without using reverse

const arr = [1, 23, 12, 43, 54, 34];
let left = 0;
let right = arr.length - 1;

const reverArrayFn = (arr) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // swap left and right items
    left++;
    right--;
  }
  return arr;
};

console.log(reverArrayFn(arr)); // [ 34, 54, 43, 12, 23, 1 ]
