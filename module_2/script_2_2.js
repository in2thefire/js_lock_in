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

//6 recursion function
// function largestNumb(){
//     let max;
//     for (const num of arguments){
//         if(typeof num === 'number'){
//             max = num;
//             break
//         }
//     }
//     for(const num of arguments){
//         if(typeof num === 'number'){
//             if(num > max){
//             max = num;
//             }
//         }else{
//             max = largestNumb(...num);
//         }
//     }   
//     return max
// }
// console.log(largestNumb([1,2,3,[4,2455]],51,123,1234,24,16));
// console.log(largestNumb(54,11,24,66));

//7 
// function calAverage(){
//     let result = 0;
    // for(let i = 0; i < arguments.length; i += 1){
    //     result += arguments[i];
    // }
//     for(const num of arguments){
//         result += num;
//     }
//      return result / arguments.length;
   
// }
// console.log(calAverage(1,2,3,4)); 
// console.log(calAverage(14,8,2));

//8
// function formatTime(minutes){
//     const hours = Math.floor(minutes / 60); 
//     minutes = minutes % 60;
//     return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`

// }
// console.log(formatTime(70)); // "01:10"

//9
// const courses = ['HTML','JS','CSS','React','SQL'];
// function addCourse(){
//     arr = [...arguments];
//     for(const elem of arr){
//         if(courses.includes(elem)){
//             return 'You already have this course'
//         }else{
//             courses.push(elem);
//             return courses
//         }
//     }
    
// }
// function removeCourse(){
//     arr = [...arguments];
//     for(const elem of arr){
//         if(courses.includes(elem)){
//             const idx = courses.indexOf(elem);
//             courses.splice(idx, 1);
//             return courses
            
//         }
//             return ("You don't have this course");
        
//     }
// }
// function removeCourse(course){
//     const idx = courses.indexOf(course)
//     if(!!~idx){
//         courses.splice(idx, 1);
//         return
//     }
//     return "not found"

// } 
// console.log(addCourse('Express','Java','C#'));
// console.log(addCourse('Express'));
// console.log(removeCourse('JS'));
// console.log(removeCourse('Node'));
//courses.includes(elem) === !!~courses.indexof(elem)
// console.log(!!~-1);
// function changeCourse(courseNew,courseOld){
//     const idx = courses.indexOf(courseOld)
//     if(!!~idx){
//     courses.splice(idx,1,courseNew);
//     return courses
//     }
//     return 'not found'
// }
// console.log(changeCourse('Node','React'));

//10

const arr = ['python','js','c++','ruby','node','react'];
function sortByBubble(arr){
    for(let i = 0;i < arr.length;i += 1){
        for(let j =0; j < arr.length; j +=1){
            if(arr[j] > arr[j + 1]){
                const item = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = item;
                
            }
        }
    }
    return arr
}
console.log(sortByBobble(arr));
   
// }
// console.log(sortByBobble());
