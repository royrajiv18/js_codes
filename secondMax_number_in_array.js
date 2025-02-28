function findSecondMaximumNumber(arr) {
  let maximumNumber = -Infinity;
  let secondMaximumNumber = -Infinity;

  for (let item of arr) {
    if (item > maximumNumber) {
      secondMaximumNumber = maximumNumber;
      maximumNumber = item;
    } else if (item > secondMaximumNumber && item < maximumNumber) {
      secondMaximumNumber = item;
    }
  }
  return secondMaximumNumber === -Infinity ? null : secondMaximumNumber;
}

const arr = [10, 20, 30, 40, 50, 25, 34];
console.log(findSecondMaximumNumber(arr));

// o/p 40
