//1 func declaration
// const arr = [1,2,3,4,5];

// function sum(arr){
// for(i = 0; i < arr.length; i += 1){
//     arr[i] = arr[i] * 2;
// }
// console.log(arr);
// }

// sum(arr);
// sum([1,5,6,89,2]);

//2 func expression
// const ass = function(arr){
//     for(i = 0; i < arr.length; i += 1){
//         arr[i] = arr[i] * 2;
// }
//     console.log(arr);
// }

// ass([1,2,3,4,5]);

//3
// function sum(){
    // const arr = Array.from(arguments);
    // const arr = [...arguments];
    // let add = 0;
    // console.log(arr);
    // for(let i = 0;i < arguments.length;i +=1){
    //     add = add + arguments[i];
    // }
//     for(const arg of arr){
//         add += arg;
//     }
//     console.log(add);
// }
// sum(1,2,3,45,6,78,9,0);

//4
// function logItems(items){
//     for(let i = 0,n = 1; i < items.length; i += 1, n += 1){
//         console.log(`${n} : ${items[i]}`);
//     }
// }
// logItems(['Mango','Poly','Sofa','Bookshelf']);
// logItems(['Apple','Banan','Pear','Orange','Lemon']);

//5
// function printContactsInfo(names, phones){
//     names = names.split(",");
//     phones = phones.split(",");
//     for(let i = 0; i < names.length, i < names.length; i += 1){
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
// }
// printContactsInfo('Jacob,Wiliam,Bohdan,Lidia','03020122,20484721,132141,23115531');

//6


largestNumb([1,2,3,4],51,123,1234,24,16);
largestNumb(54,11,24,66);