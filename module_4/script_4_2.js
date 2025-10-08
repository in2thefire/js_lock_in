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

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// const getCarsOnSale = (cars) => {
//   return cars.filter(({ onSale }) => onSale);
// };

// console.log(getCarsOnSale(cars));
// const getCarsWithType = (cars, type) => {
//   return cars.filter(({ type: carType }) => type === carType);
// };

// console.log(getCarsWithType(cars, "sedan"));
// console.log(getCarsWithType(cars, "suv"));

// const getCarsWithModel = (cars, model) => {
//   return cars.find(({ model: carModel }) => model === carModel);
// };

// console.log(getCarsWithModel(cars, "Fusion"));

// const sortByAscendingAmount = (cars) => {
//   [...cars].sort((a, b) => a.amount - b.amount);
// };

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// const getAvalableCarNames = (cars) =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .map(({ make, model }) => `${make} ${model}`);
// console.log(getAvalableCarNames(cars));

// const getSortedCarsOnSale = (cars) =>
//   cars
//     .filter(({ onSale }) => onSale)
//     .sort(({ price: a }, { price: b }) => a - b);

// console.log(getSortedCarsOnSale(cars));

// const str = "anfaofasnfajsfkaspflsckasdmaiwjdasdaskdalsc";

// const result = str.split("").reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});

// const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

// console.log(sorted);
// const arr = [];
// // const arr = ["Honda", "Audi", "BMW", "Toyota", "Mersedes", "Ford", "Skoda"];

// const result = arr.reduce(
//   (acc, item, idx) => {
//     return acc + `${idx + 1} - ${item}\n`;
//   },
//   arr.length
//     ? `Загальна кількість авто - ${arr.length}: \n`
//     : `Вибачте авто немає 😥`
// );

// console.log(result);
