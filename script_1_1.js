// 1
const apples = 47;
const grapes = 135;
const total = apples + grapes;
const diff = grapes - apples;
console.log(total);
console.log(diff);

//2
let students = 100;
students = students + 50;
students += 50;
console.log(students);

//3
const result = 108 + 24 * 3 - 4;
console.log(result);

//4
const value = 27.5;
//console.log(Math.ceil(value)); завжди округлить в більшу сторону
//console.log(Math.floor(value)); завжди округлить в меншу сторону 
console.log(Math.round(value)); // завжди округлить просто, якщо >5 то в низ якщо <= 5 то в верх

//5
const name = 'Bohdan';
const age = 24;
console.log(`Hi, my name is ${name} and my age is ${age}`)

//6  
const c = 24;
const d = '5';
const result1 = c - Number(d);
console.log(typeof result1, result1);

//7 
let weight = '70,6';
let height = '1.80';
weight = Number(weight.replace(',','.'));
console.log(weight);
//const bmi = weight / Math.pow(+height,2);
const bmi = Number((weight / (+height) ** 2).toFixed(1));
console.log(bmi);

//8
const incomingValue = 5;
const resultat =  incomingValue + Number('22');
const defaultValue = 10;
const valuee = resultat || defaultValue
console.log(valuee)
