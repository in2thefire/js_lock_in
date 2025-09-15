// 1
// const value = 5
// const value1 = 7
// if(value > value1){
//     console.log('det er rett');
// }else if(value === value1){
//     console.log('det same');
// }else{
//     console.log('ikkje bra');
// }

// 2
// const a = 0;
// if(a){
//     console.log('true');
// }else{
//     console.log('false');
// }

//3                  true     false
// const  b = 10 > 6 ? 'more' : 'less';
// console.log(b);

//4
// const price = 5;
// switch(price){
//     case 1:
//         console.log('case 1');
//         break
//     case 2:
//         console.log('case 2');
//         break
//     case 3:
//         console.log('case 3');
//         break
//     case 5:
//         console.log('case 5');
//         break
//     default:
//         console.log('default');
// }

//5 ініціалізація; умова; поствираз
// for (let i = 0; i < 5; i += 1){
//     console.log(i);
// }

//6
// const str = 'Hello World';
// for (let i = 0; i < str.length; i += 1){
//     console.log(str[i]);
// }

//7
// let i = 0;
// while(i < str.length){
//     if(str[i] === 'W'){
//         console.log('yes');
//         break
//     }
//     console.log('no', str[i]);
//     i += 1;
    
// }

// 8
// const str1 = 'Hi man'
// let n = 0;
// do{ 
//     if(str1[i] === 'W'){
//     console.log('yes');
//     break
//     }
//     console.log('no', str1[i]); 
//     i += 1;
// }while(i < str1.length);

// 9
// const p = prompt('Java script actual name?')
// if(p === 'ECMAScript'){
//     alert('Correct!')
// }else if( p === null){
//     alert('Answer me!')
// }
// else{
//     alert('Incorrect')
// }

// 10
// const hours = 14;
// const minutes = 0;
// let timestring;

// if(minutes === 0){
//     timestring = `${hours} h`;
// }else{
//     timestring = `${hours} h : ${minutes} min`
// }
// console.log(`Time is ${timestring}`);

//11
// const userInput = Number(prompt('Введіть число'));
// console.log(typeof userInput);
// if (!userInput){
//     console.log('Це 0');
// }else if (userInput > 0){
//     console.log(`${userInput} це позитивне число`);
// }else{
//     console.log(`${userInput} це від'ємне число`);
// }

//12
// const userInput = Number(prompt('Введіть число'));
// if(userInput % 2){
//     console.log('Не парне');
// }else{
//     console.log('Парне');
// }

//13
// const a = 120; 
// const b = 180;
// if(a > 100 && b > 100){
//     console.log(a > b ? a : b);
// }else{ 
//     console.log(b + 512);
// }

//14
// let link = 'https:/my-site.com/about';
// if(!(link.endsWith('/'))){
//     link += '/'
// }
// console.log(link);

//15
// let link = 'https:/my-site.com/about';
// if (!link.endsWith('/') && link.includes('my-site')){
//         link += '/';
// }
// console.log(link);

//16
// let link = 'https:/my-site.com/about';
// console.log(!link.endsWith('/') && link.includes('my-site') ? link += '/' : link);

//17
// const hours = 12;
// if (hours < 17){
//     console.log('Pending..');
// }else if(hours >= 17 && hours <= 24){
//     console.log('Expires..');
// }else{
//     console.log('Overdue..');
// }

//18
// const daysUntilDeadline = 0;
// if (!daysUntilDeadline) {
//     console.log('Сьогодні');
// }else if (daysUntilDeadline === 1){
//     console.log('Завтра');
// }else if (daysUntilDeadline === 2){
//     console.log('Після завтра');
// }else {
//     console.log(`Залишилось ${daysUntilDeadline} days`);
// }


// if(daysUntilDeadline >= 0){
//     switch(daysUntilDeadline){
//     case 0 : 
//         console.log('Сьогодні');
//         break
//     case 1:
//         console.log('Завтра');
//         break
//     case 2:
//         console.log('Після завтра');
//         break
//     default:
//         console.log(`Залишилось ${daysUntilDeadline} days`);
//     }
// }else {
//     console.log('Неправильне число');
// }

//19
// const max = 200;
// const min = 10;

// for(let i = min; i <= max; i += 1){
//     if(!(i % 5)){
//         console.log(i);
//     } 
// }

//20

const login = prompt('Login?');
if(!login){
    console.log('Cкасовано');
}else if(login === "Адмін"){
    const pass = prompt('Pass?');
    if(pass === "Я адмін"){
        console.log('Я вас знаю');
    }else{ 
        console.log("Невірний пароль");
    }
    
}else{
    console.log('Я вас не знаю');
}