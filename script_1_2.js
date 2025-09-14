//1
const value = 5
const value1 = 7
if(value > value1){
    console.log('det er rett');
}else if(value === value1){
    console.log('det same');
}else{
    console.log('ikkje bra');
}

//2
const a = 0;
if(a){
    console.log('true');
}else{
    console.log('false');
}

//3                  true     false
const  b = 10 > 6 ? 'more' : 'less';
console.log(b);

//4
const price = 5;
switch(price){
    case 1:
        console.log('case 1');
        break
    case 2:
        console.log('case 2');
        break
    case 3:
        console.log('case 3');
        break
    case 5:
        console.log('case 5');
        break
    default:
        console.log('default');
}

//5 ініціалізація; умова; поствираз
for (let i = 0; i < 5; i += 1){
    console.log(i);
}

//6
const str = 'Hello World';
for (let i = 0; i < str.length; i += 1){
    console.log(str[i]);
}

//7
let i = 0;
while(i < str.length){
    if(str[i] === 'W'){
        console.log('yes');
        break
    }
    console.log('no', str[i]);
    i += 1;
    
}