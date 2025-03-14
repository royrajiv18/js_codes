const arr = [1, 2, 1, 2, 4, 5, 6, 1, 3, 10];

const output = {};
const showFrequency = (arr) => {
  arr.forEach((item) => {
    output[item] = (output[item] || 0) + 1;
  });

  return output;
};

console.log(showFrequency(arr));
