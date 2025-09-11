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