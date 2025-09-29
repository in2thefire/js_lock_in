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

// const hi = () => {
//   console.log('Hi');
// }

// hi()

const arr = [1,3,4,7,9,2];
function add(arr){
    total = arr[0];
    for(i = 1; i < arr.length; i += 1){
        total += arr[i];
    }
}