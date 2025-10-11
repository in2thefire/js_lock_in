// "use strict";

// function foo() {
//   console.log(this);
// }
// foo();

// const boo = function () {
//   console.log(this);
// };
// boo();

// const arrow = () => {
//   console.log(this);
// };

// arrow();

//call
//apply
//bind

const objA = {
  age: 22,
  myAge() {
    console.log(this);
  },
};

objA.myAge();
