//1
const arr = [1,2,3,4,5];

function sum(arr){
for(i = 0; i < arr.length; i += 1){
    arr[i] = arr[i] * 2;
}
console.log(arr);
}

sum(arr);
sum([1,5,6,89,2]);