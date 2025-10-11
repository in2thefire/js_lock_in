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

// const objA = {
//   age: 22,
//   myAge(a, b) {
//     console.log(this, a, b);
//   },
// };
// objA.myAge(22, 34);
// const objB = {
//   age: 23,
// };

// objA.myAge.call(objB, 1, 2);
// objA.myAge.apply(objB, [1, 2]);

// const result = objA.myAge.bind(objB);

// result(20, 30);

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Sapphire", price: 1400, quantity: 3 },
//     { name: "Diamond", price: 2300, quantity: 2 },
//     { name: "Ruby", price: 800, quantity: 5 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice("Emerald"));

// const shop2 = {
//   stones: [
//     { name: "Stone", price: 900, quantity: 4 },
//     { name: "Sand", price: 700, quantity: 7 },
//   ],
// };
// console.log(chopShop.calcTotalPrice.call(shop2, "Stone"));

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add(a, b) {
    return (this.a ?? 0) + (this.b ?? 0);
  },
  mult(a, b) {
    return (this.a ?? 1) * (this.b ?? 1);
  },
};
calculator.read(3, 4);
console.log(calculator);

console.log(calculator.add());
console.log(calculator.mult());
