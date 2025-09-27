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
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if(apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
  }

  // Change code above this line
}
