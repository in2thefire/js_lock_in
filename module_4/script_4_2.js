// const arr = [1, 2, 3, 4, 5, 6, 7];
// const mapArr = arr.map((item) => item * 2);
// console.log(mapArr);

// const result = arr.map(item => !(item % 2) ? item * 2 : item);
// console.log(result);

// const findArr = arr.find(item => item > 5)
// console.log(findArr);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.filter((item) => !(item % 2)).map((item) => item * 2);
// console.log(result);

// const arr = [1, 3, 5, 7];
// const result = arr.every((item) => typeof item === "number");
// console.log(result);

// const result2 = arr.some((item) => !(item % 2));
// console.log(result2);

// const arr = [11, 23, 15, 65, 124, 25, 76, 34, 61, 32, 7, 2, 15, 17, 99];
// const result1 = arr.sort((a, b) => a - b);
// const result2 = [...arr].sort((a, b) => b - a);
// console.log(result2);
// console.log(result1);

// const arr = ["a", "b", "S", "A", "d"];
// // const result = arr.sort();
// const result = arr.sort((a, b) => a.localeCompare(b));
// console.table   (result);

// const arr = [11, 23, 15, 65, 124, 25, 76, 34, 61, 32, 7, 2, 15, 17, 99];
// const result = arr.reduce((acc, item) => {}, 0);

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = (cars) => {
//   return cars.map((model) => model.model);
// };

// console.table(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => ({
//     ...car,
//     price : car.price * (1 - discount)
//   }));
// };
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
