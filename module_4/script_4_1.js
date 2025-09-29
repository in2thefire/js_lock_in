// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);



// const arr = [1,2,3,4,5,6];
// arr.forEach(function(element, index){
//     console.log(`${index + 1} : ${element}`);
// })

const arr = [2,4,2,5,8,9];
function each(arr, callback){
  let total = 1;
  for(const item of arr){
    total = callback(total, item)
  }
  return total
}
const sum = (first, second) => first + second;
const multi = (first, second) => first * second;

console.log(each(arr, sum));



// const hi = () => {
//   console.log('Hi');
// }

// hi()