const users = [
  {
    firstName: "Rohit",
    lastName: "Sharma",
    age: 37,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    age: 36,
  },
  {
    firstName: "Jasprit",
    lastName: "Bumrah",
    age: 32,
  },
  {
    firstName: "Ravindra",
    lastName: "Jadeja",
    age: 37,
  },
  {
    firstName: "Shubhman",
    lastName: "Gill",
    age: 27,
  },
];

function createAgeList(users) {
  const output = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
      ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  return output;
}

console.log(createAgeList(users));

// o/p: { '27': 1, '32': 1, '36': 1, '37': 2 }
