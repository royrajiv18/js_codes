const arr = [1, 2, 1, 2, 4, 5, 6, 1, 3, 10];

const output = {};
const showFrequency = (arr) => {
  arr.forEach((item) => {
    output[item] = (output[item] || 0) + 1;
  });

  return output;
};

console.log(showFrequency(arr)); // { '1': 3, '2': 2, '3': 1, '4': 1, '5': 1, '6': 1, '10': 1 }
