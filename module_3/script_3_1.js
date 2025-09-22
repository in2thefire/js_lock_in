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