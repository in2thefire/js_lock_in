//1
// const arr = [1,2,3];
// const [ _, first] = arr;
// console.log(first);

//2
// const user = {
//     name: "Bohdan",
//     age: 24,
//     skills: {
//         html: true,
//         js: true,
//         react: false
//     }
// }
// const {name, age, skills:{html, js, react}} = user;
// console.log(name);
// console.log(age);
// console.log(html);
// console.log(js);
// console.log(react);

//3
// const user = [
//     {
//         name : "User 1",
//         language : "JS",
//         own: {
//             car: "audi"
//         }
//     },
//         {
//         name : "User 2",
//         language: "CSS",
//         own: {
//            car: "bmw"
//         }
//     },
//         {
//         name : "User 3",
//         language : "HTML",
//         own: { 
//             car: "mersedes"
//         }
//     },
//         {
//         name : "User 4",
//         language : "Python",
//         own: {
//             car: "volvo"
//         }
//     }
// ]

// for(const {name, language, own : {car} } of user){
//     console.log(`${name} own ${car}`);
// }

//4
// /**
//  * Calculating BMI 
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */
// function calcBMI({weight, height}){
//     const numericWeight = Number(weight.replace(',','.'));
//     const numericHeight = Number(height.replace(',','.'));
//     return Number((numericWeight / numericHeight **2).toFixed(1))

// }
// console.log(calcBMI({weight: '88,3', height: "1.75"}));

//5
// function createdContact(partialContact){
//     return {
//         id: generateId(),
//         createdAt: new Date(), 
//         list: 'default',
//         ...partialContact,
//     }
// }
// console.log(createdContact({
//     name : 'Bohdan',
//     email : 'in2thefiree@gmail.com',
//     list: 'friends',
// }));
// console.log(createdContact({
//     name: 'Andrew',
//     email: 'andrei@gmail.com'
// }));

// function generateId(){
//     return ' ' + Math.random().toString(36).substr(2, 9);
// }

//6
// function transformUsername({firstName, secondName, ...props}){
//     return {
//         fullName : `${firstName} ${secondName}`,
//         ...props
//     }

// }   
// console.log(transformUsername({
//     id : 1,
//     firstName : 'Mango',
//     secondName : 'Polly',
//     email: 'mango@gmail.com',
//     friendsCount : 20,
// }));

// console.log(transformUsername({
//     id : 2,
//     firstName : 'Lime',
//     secondName : 'Per',
//     email: 'lime@gmail.com',
//     friendsCount : 23,
// }));

//7
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
//   }

//   // Change code above this line
// }

//8
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for(const key in object){
//         if(object.hasOwnProperty(key)){
//             propCount += 1
//         }   
//     }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({
//     name: 'Mango',
//     age: 23,
//     country: 'Ukraine'
// }));

// console.log(countProps({
//     name: 'Mango',
//     age: 23,
// }));

//9
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for(const key of keys){
//     values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

//10
// function countProps(object) {
//   // Change code below this line
//   const keys = Object.keys(object);
//   const propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({
//     name : 'Bohdan',
//     email : 'in2thefiree@gmail.com',
//     list: 'friends',
// }));

//11
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for(const value of values){
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//12
//   const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
//   for(const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }