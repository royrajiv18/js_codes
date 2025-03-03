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

// **************************************

//Arrow function doesn't have its own "this".
//They take the value of the lexical environment where they are enclosed.
const a = (x) => {
  console.log(this);
};
a();
// window object

// **************************************

const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj2.x();

// window object

// **************************************
// inside nested arrow fn

const obj3 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj3.x();

// {a: 10, x: fn}
// this takes the value of its parents lexical env

// **************************************

// this inside dom refer to the html element

/*
<button onclick="alert(this)">
Click me
<button/>
*/

// [object HTMLButtonELement]
