// Currying - we make a copy of a method and make more methods out of it by pre setting some arguments inside the fn

// 1st way - by using bind

const multiply = (x, y) => console.log(x * y);

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); // 6

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); //15

// 2nd way by using closures

const multiply1 = (x) => (y) => console.log(x * y);

const multiply1ByTwo = multiply1(2);
multiply1ByTwo(3); // 6

const multiply1ByThree = multiply1(3);
multiply1ByThree(5); // 15
