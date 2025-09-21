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
const user = {
    name:'Bohdan',
    age: 24,
    languages: {
        html: false,
        css: false,
        js: true,
        React_Native: false
    }
}

if(user.hasOwnProperty('age')){
    console.log('yes');
}else{
    console.log('no');
}