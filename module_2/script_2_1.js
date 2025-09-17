//1
// const array = [1, 'Hello', null, true, [1,2,3], 10, 'Hi'];
// console.log(array);
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
// for(let i = 0; i < array.length; i+=1){
//     if(typeof array[i] === 'string'){
//         array[i] = 'Змінили'
//     }
//     console.log(array[i]);
// }
// console.log(array);

//5
// let i = 0;
// while(i < array.length){
//     console.log(array[i]);
//     i += 1;
// }

//6 
// let value = 1;
// let test = value;
// value = 'hi';

// console.log(value);
// console.log(test);

//7
// const array = [1,2,3,4,5];
// const copy = array;

// array.push(6,7);
// copy.push(8,9);

// console.log(array);
// console.log(copy);

// console.log(1 === 1);
// console.log('hi' === 'hi');
// console.log([1,2,3] === [1,2,3]);
// console.log(array === copy);

//8
// const str = 'hello world';
// const arr = str.split(" ").reverse().join(" ");
// console.log(str);
// console.log(arr);

//9
const str = 'Hello i love JS';
arr = str.split(" ");
console.log(arr);
if(arr.includes('JS')){
    console.log('yes');
}else{
    console.log('no');
}