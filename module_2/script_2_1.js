//1
const array = [1, 'Hello', null, true, [1,2,3], 10, 'Hi'];
console.log(array);
// console.log(Array.isArray(array));

// const first = array[0];
// const second = array[1];
// const last = array[array.length - 1];
// console.log(first, second, last);
// console.log(array.length);   

//2
// for(let i = 0; i < array.length; i += 1){
//     if(Array.isArray(array[i])){
//         for(let j = 0; j < array[i].length; j += 1){
//             console.log(array[i][j]);
//         }
//         continue
//     }
//     console.log(array[i]);
// }

//3
// for(const item of array){
//     console.log(item);
// }

//4
for(let i = 0; i < array.length; i+=1){
    if(typeof array[i] === 'string'){
        array[i] = 'Змінили'
    }
    console.log(array[i]);
}
console.log(array);