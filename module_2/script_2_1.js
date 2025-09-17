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
// const str = 'Hello i love JS';
// arr = str.split(" ");
// console.log(arr);
// if(arr.includes('JS')){
//     console.log('yes');
// }else{
//     console.log('no');
// }
// console.log(arr.includes('JS'));

//10 PUSH - add from end , POP - delete from end, 
// SHIFT - delete from begini   ng , UNSHIFT - add from begining,
//splice - add, delete,change.

// const arr = ['hello', 'world','js'];

//push pop
// arr.push(1,44,14,12);
// arr.pop();
// arr.pop();
// arr.pop();

//shift unshift
// arr.unshift(3,2,1);
// arr.shift();
// arr.shift(); 

//slice
// const result = arr.slice(1,3);
// console.log(result);

//splice
// arr.splice(1,0,'from', 'react', 'node');
// const idx = arr.indexOf('world');
// const result = arr.splice(idx, 1, 'from');
// console.log('result', result);
// console.log(arr);

//concat
// const arr = ['hello', 'world','js'];
// const arr1 = [1,2,4];
// const arr2 = [3,'hi'];
// const result = arr.concat(arr1,arr2);
// console.log(result);

//11
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length,0,'RockNRoll');  
// console.log(genres.splice(0,1,'Country, Reggae'));

// genres.push('Rock n Roll');
// console.log('first',genres[0]);
// console.log('last', genres[genres.length - 1]);
// console.log(genres.shift()); 
// genres.unshift('Country', 'Reggae');
// console.log(genres);

//12
// const value = "10 15";
// const arr = value.split(" ");
// const a = Number(arr[0]);
// const b = Number(arr[arr.length - 1]);
// const square = a * b;
// console.log(arr);
// console.log(square);

//13
// const fruits = ['apple', 'banana', 'pear', 'peach', 'melon', 'orange', 'grapes'];
// for(let i = 0, n = 1; i < fruits.length; i += 1, n += 1){
//     console.log(`${n} : ${fruits[i]}`); 
// }    

// for(let i = 0; i < fruits.length; i += 1){
//     const number = i + 1;
//     console.log(`${number} : ${fruits[i]}`); 
// }    