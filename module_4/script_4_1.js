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

// const arr = [1,3,4,7,9,2];
// function add(arr){
//     total = arr[0];
//     for(i = 1; i < arr.length; i += 1){
//         total += arr[i];
//     }
// }


// const arr = [1,3,7,9,2,4,5,6];
// arr.forEach(function(element, index, arr){
//     console.log(`${index + 1} : ${element}`);
//     arr[index] = element * 2;
// })

// console.log(arr);

// const arr = [1,3,7,9,2,4,5,6];

// function each(arr , callback){
//     let total = arr[0];
//     for(let i = 0; i < arr.length; i += 1){
//         total = callback(total, arr[i]);
//     }
//     return total
// }

// const mult = (a,b) => a * b;
// const devision = (a,b) => a / b;
// const add = (a,b) => a + b;

// console.log(each(arr,mult));
// console.log(each(arr,add));
// console.log(each(arr,devision));

// function createProduct(obj, callback){
//     const product = {
//         id : Date.now(),
//         ...obj  
//     }
//     callback(product);
// }
// const logProduct = (product) => {
//     console.log(product.name);
// }
// const logTotalPrice = (product) => {
//     console.log(product.price * product.quantity);
// }
// createProduct({
//     name: 'Apple',
//     price: 40,
//     quantity: 4
// }, logProduct)
// createProduct({
//     name: 'Apple',
//     price: 40,
//     quantity: 4
// }, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;
// const account = {
//     username: 'in2thefire',
//     balance: 700,
//     withdraw(amount, onSuccess, onError){
//         if(amount > TRANSACTION_LIMIT){
//             onError(amount,this.balance)
//             return
//         }else if(amount > this.balance){
//             onError(amount,this.balance)
//             return
//         }
//             this.balance -= amount;
//             onSuccess(amount,this.balance)
//     },
//     deposit(amount, onSuccess, onError){
//         if(amount <= TRANSACTION_LIMIT){
//             this.balance += amount;
//             onSuccess(amount,this.balance)
//             return
//         }else{
//             onError(amount,this.balance)
//         } 
//     },
//     }

// function handleSuccess(amount, newBalance){
//     console.log(`Success ${amount}, new balance ${newBalance}`);
// }
// function handleError(amount, newBalance){
//     console.log(`Error ${amount}, new balance ${newBalance}`);
// }


// account.withdraw(300,handleSuccess,handleError);
// account.deposit(800,handleSuccess,handleError);