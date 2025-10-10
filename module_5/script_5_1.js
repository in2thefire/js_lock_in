"use strict";

function foo() {
  console.log(this);
}
foo();

const boo = function () {
  console.log(this);
};
boo();

const arrow = () => {
  console.log(this);
};

arrow();
