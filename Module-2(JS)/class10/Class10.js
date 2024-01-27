// for(let i =1; i<=10; i++){
//     console.log("2 * "+ i + " = "+ 2*i)
// }

// var arr=[10,11,12,13,14]
// var i= 0
// for(;;){
//     if(i>=3)
//     break;
// document.write(arr[i]);
// document.write("<br>");
// i++;
// }

// For in loop
// let person = {
//     name: 'John',
//     age: 30,
//     job: 'developer'
// };

// for (let key in person){
//     document.write(key+" : "+person[key]+"<br>");
// }

// let area = {};
// area.height = 200;
// area.width = 100;
// result1 = area.hasOwnProperty("height");
// result2 = area.hasOwnProperty("width");
// document.write(result1)
// document.write(result2)

//for of loop (for iterable objects such as string, array)

// const numbers = [1,2,3,4,5];
// for (number of numbers){
//     console.log(number)
// }
// const message = "Hello, Class"
// for(const char of message){
//     console.log(char);
// }

// While loop
// let c = 0
// while(c<5){
// console.log("Count: "+c);
// c++
// }

// Practice Questions

// for(let i = 1 ; i<=10;i+=2){
// console.log(i)
// }

// for(let j = 1; j<=50; j++){

//     if(j%3==0 && j%5==0){
//        console.log("Aish kro")
//    }
    
//     else if(j%5==0){
//         console.log("pio")
//     }
//    else if(j%3==0){
//         console.log("khao")
//     }
// else{
//     console.log(j)
// }
// }

// let n = 12
// for(n; n<=24;n++){
//     console.log(n)
// }


//Functions
// const text = "Hello, Class!"
// const char = text.charAt(7);
// console.log(char)

// var str = "Hello Class"
// console.log(str.replace("Class", "Shivam"))

// const str1 = 'Jude'
// const str2 = 'Bellingham'
// const result = str1.concat(" ",str2)
// console.log(result)

// var str3 = "Hello Class"
// console.log(str.length)

// console.log(text.indexOf("Class"))
// console.log(text.slice(6))   //starts with 1

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())

// // Array Functions
// const names = ["Palak","Shivam","ABC"]
// names.push("a");

// console.log(names)

// const rem_names = names.pop();
// console.log(rem_names);

// console.log(names.length)

// console.log(names.shift())
// console.log(names)

// console.log(names.unshift(30))
// console.log(names)

// const names2=  [1,2,3,4,5,6];
// console.log(names2.slice(1,3)) //i,i+1  
// console.log(names2.splice(0,1,10,13))  //index,how many values, values
// console.log(names2)


// const arr = ["p", "x", [3,5], "b"]
// arr.splice(2,2,"Q","R","AS")
// console.log(arr)

// const array=[1,2,3]
// array.forEach(function (arar){
//     console.log(arar)
// })

// var myArray = [2,4,6,8,10,11]
// var newArr = myArray.map(function(element){
// return element*2;

// });
// console.log(newArr)

// var evenArr = myArray.filter(function(a){
//     return a%2==0;
    
// })
// console.log(evenArr)

// var sum = myArray.reduce(function(acc,cur){
//     return acc+cur;

// })
// console.log(sum)

console.log(Math.random())

const num = 4.4
console.log(Math.floor(num))
console.log(Math.ceil(num))
// math functions
console.log(Math.round(3.5))
console.log(Math.max(23,35,44))
console.log(Math.min(23,35,44))
console.log(Math.PI)
console.log(Math.E)
console.log(Math.sqrt(9801));
const date = new Date();
console.log(date)
const month = date.getMonth();
console.log(month)
const day = date.getDate();
console.log(day)
const year = date.getFullYear();
console.log(year)
// Global Functions
const num1 = parseInt("42");
console.log(num1)
const num2= parseFloat("3.14");
console.log(num2)

const nan = isNaN()
console.log(nan)
const finite = isFinite(42);
console.log(finite)

console.log((Math.E).toFixed(4))
console.log(Number(false))

// alert("Be happy Palak..")

// const result= confirm("pkka chai peeyenge na");
// if(result){
//     alert("Yes");
// }
// else(
//     alert("no")
// )


const number = prompt("Enter a Number")
if(number%2==0){
   alert(`${number} is an even number`)
}
else{
    alert(`${number} is not an even number`)
}
