// **************************************
"use strict";
function x() {
  console.log(this);
}
x();
// undefined

// **************************************

function x() {
  console.log(this);
}
x();

// window object

// **************************************

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();
/* {
    "a": 10,
    x: fn
}
*/

// **************************************

const obj1 = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};
obj1.x();

// 10
