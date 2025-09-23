//1 
// const user = {
//     name:'Bohdan',
//     age: 24,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         React_Native: false
//     }
// }
// console.log(user.languages.js);
// console.log(user['languages']['js']);

// for(const key in user){
//     console.log(user[key]);
// }

// user.age = 25;
// user.age += 1;

//Object.freeze(user); заморозка змін в обєкті

// user.city = 'Ølen';
// console.log(user);

// delete user.city;
// console.log(user);

//2 
// const user = {
//     name:'Bohdan',
//     age: 24,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         React_Native: false
//     }
// }

// if(user.hasOwnProperty('age')){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// if('age' in user){
//     console.log('yes');
// }else{
//     console.log('no');
// }

//3
// const user = {
//     name:'Bohdan',
//     age: 24,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         React_Native: false
//     },
//     sayHello(){
//         console.log(`My name is ${this.name}`);
//     },
//     iKnow(){
//         const keys = Object.keys(this.languages);
//         const values = Object.values(this.languages);
//         const entries = Object.entries(this.languages);
//         console.log(keys);
//         console.log(values);
//         console.log(entries);
        // for(key of keys){
        //     if(this.languages[key]){
        //         console.log(key);
        //     }
        // }
    //     for(const key in this.languages){
    //         if(this.languages[key]){
    //             console.log(`I know ${key}`);
    //     }
    // }
// }
// }

// const user2 = Object.create(user);
// user2.name = 'Artem';
// user2.languages.node = 'true';
// console.log(user);
//      
// user2.iKnow();
// user.iKnow();
// user2.sayHello()
// user.sayHello();

//4
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = 'false';

// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(`${key} : ${user[key]}`);
// }

// console.log(user);  

//5 
// const salary = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let money = 0;
// for(const key in salary){
//     money += salary[key]
// }

// const values = Object.values(salary);
// for(const value of values){
//     money += value  
// }
// console.log(money);

//6 
// function calcTotalPrice(stones,stoneName){
//      for(const stone of stones){
//         if(stone.name === stoneName){
//             return stone.price * stone.quantity;
//         }
//     }
//   return "Empty"      
// }
// const stone = [{
//     name:"Смарагд",
//     price: 1300,
//     quantity: 4
// },
// {
//     name:"Сапфір",
//     price: 2400,
//     quantity: 2
// },
// {
//     name:"Рубін",
//     price: 1700,
//     quantity: 3
// },
// {
//     name:"Топаз",
//     price: 2783,
//     quantity: 4
// }]

// console.log(calcTotalPrice(stone, "Сапфір"));

//7
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);

// const account = {
//     balance: 0,
//     transaction: [{id: 1758648235203, amount: 12678, type: 'deposit'}],
//     createTransaction(amount, type){
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },
//     deposit(amount){
//         if(amount <= 0){
//             return "Error"
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//         this.transaction.push(item);
//     },
//     withdraw(amount){
//          if(amount > this.balance || amount <= 0){
//             return "You don't have money for this"
//          }
//          const item = this.createTransaction(amount, Transaction.WITHDRAW);
//          this.balance -= amount;
//          this.transaction.push(item);
//     },
//     getBalance(){
//         return this.balance;
//     },
//     getTransactionDetails(id){
//         for(const item of this.transaction){
//             if(item.id === id){
//                 return item
//             }
//         }
//         return "Empty"
//     },
//     getTransactionTotal(type){
//         let sum = 0;
//         for(const item of this.transaction){
//             if(item.type === type){
//                 sum += item.amount
//             }
//         }   
//         return sum
//     }
// }

// account.deposit(12678);
// account.deposit(12678);
// account.deposit(12678);
// account.withdraw(435);
// console.log(account.getTransactionDetails(1758648235203));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));