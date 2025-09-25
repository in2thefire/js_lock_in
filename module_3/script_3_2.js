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
const user = [
    {
        name : "User 1",
        language : "JS"
    },
        {
        name : "User 2",
        language: "CSS"
    },
        {
        name : "User 3",
        language : "HTML"
    },
        {
        name : "User 4",
        language : "Python"
    }
]

for(const {name, language} of user){
    console.log(name);
    
}