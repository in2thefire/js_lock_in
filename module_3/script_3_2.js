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

//13
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for(const key of products){
//       if(key.name === productName){
//           return key.price
//       }
//   }
//         return null
//   }


//   // Change code above this line

// //14
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let values = [];
//   for(const product of products){
//         if(product.hasOwnProperty(propName)){
//                values.push(product[propName]);
//         }
//   }
// return values

//   // Change code above this line
// }
// console.log(getAllPropValues("price"));

//15
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let totalPrice = 0;
//     for(const product of products){
//         if(product.name === productName){
//             totalPrice = product['price'] * product['quantity'];
//         }
//     }
//     return totalPrice

//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));

//16
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday : highYesterday,
//     today : highToday,
//     tomorrow :highTomorrow,
//     highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line
// const {
//     today : {
//         low : lowToday, 
//         high: highToday, 
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     },
//     tomorrow : {
//         low: lowTomorrow, 
//         high: highTomorrow, 
//         icon: tomorrowIcon  = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     }
// } = forecast;


// Change code below this line
// function calculateMeanTemperature(forecast) {
//     const {
//         today : {
//             low : todayLow,
//             high : todayHigh
//         },
//         tomorrow : {
//             low : tomorrowLow,
//             high: tomorrowHigh
//         }
//     } = forecast

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature(
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }));

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {
//     category : category,
//     completed : completed,
//     priority : priority,
//     ...data 
// }
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// Change code below this line
// function add(...args) {
//   let sum = 0;
//   for(const arg of args){
//     sum += arg;
//   }
//   return sum
//   // Change code above this line
// }

// console.log(add(15, 27));

// // Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//       if(arg > number){
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
//   for(arg of args){
//     if(arr.includes(arg)){
//       matches.push(arg)
//     }
//   }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     for(const book in this.books){
//       if(this.books[book] === oldName){
//         this.books[book] = newName
//         return `Updating book ${oldName} to ${newName}`
//       }
//     }
//     return 'There is no book like that'

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// console.log(bookShelf);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion('Power potion'));
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     deleteIDX = this.potions.indexOf(potionName);
//     this.potions.splice(deleteIDX, 1)

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//    const idx = this.potions.indexOf(oldName)
//     for(const potion of this.potions){
//       if(this.potions[idx] === oldName){
//         this.potions[idx] = newName
//       }
//     }
//     // Change code above this line
//   },
// };


//------------------------- atTheOldToad


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Повертає масив зілля
  getPotions() {
    return this.potions;
  },

  // Додає нове зілля, перевіряючи на дубль
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  // Видаляє зілля за назвою
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  // Оновлює назву зілля
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  }
};

