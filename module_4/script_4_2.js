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

const arr = [11, 23, 15, 65, 124, 25, 76, 34, 61, 32, 7, 2, 15, 17, 99];
const result = arr.reduce((acc, item) => {}, 0);
