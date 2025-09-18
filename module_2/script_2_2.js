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
function sum(){
    // const arr = Array.from(arguments);
    const arr = [...arguments];
    let add = 0;
    console.log(arr);
    // for(let i = 0;i < arguments.length;i +=1){
    //     add = add + arguments[i];
    // }
    for(const arg of arr){
        add += arg;
    }
    console.log(add);
}
sum(1,2,3,45,6,78,9,0);