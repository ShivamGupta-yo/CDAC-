  //----------------------even no--------------------------------------------------------------------------------------------------------------
  for(let i = 1; i <=50; i++){
    if(i%2==0){
     console.log(i,)
    }else
    console.log(" ");
}
//---------------------------replace every second element with z in given string---------------------------------------------------------
let str = 'HelloClass';

let resultstring = '';
for(let j = 0; j < str.length; j++){
 if(j%2!= 0){
     resultstring += "Z";
 }else{
     resultstring += str.charAt(j);
 }
} 
console.log(resultstring,);

//--------------------------------------check string----------------------------------------------------------------------------------
let string = "ShivamJSGupta"
for(let i = 0 ; i < string.length; i++){
if(string.charAt(i) === 'J' && string.charAt(i+1) === 'S'){
console.log("yes");
}
}

//------------------------------------------------print H pattern------------------------------------------------------------------------
console.log()

let h = 7;
for(let row = 0 ; row < h ; row++){
for(let col = 0 ; col  < h; col++){
 if(col==0 || col == h-1  || row== Math.floor(h/2)){
     document.write("#");
 }else{
     document.write("&nbsp;&nbsp;");
 }
}
document.write("<br>");
}
document.write("<br>");

//--------------------------------------------- find no of digits in a number 83356-------------------------------------------------------
let number = 83356;
let count = 0;

while(number>0){
count++;
number= Math.floor(number/10);
}
console.log(count);
console.log();

//--------------------------------------------------largest number using loop-----------------------------------------------------------------
let arr =  [2, 45, 3, 67, 34, 567, 34, 345, 123];
var max = arr[0];
for(let i = 1; i < arr.length;i++){
max = (arr[i]>max) ? max = arr[i] : max;
}
console.log(max,);
//---------------------------------------------------------checking odd or even in each iteration----------------------------------------------

for(let i = 0 ; i <=15 ; i++){
if(i%2==0){
 console.log(`${i} is even `);
}else{
 console.log(`${i} is odd`);
}
}

//------------------------------------------------------multiple of 3 from 3 to 20------------------------------------------------------------

for(let i = 3; i<=20 ;i++){
if(i%3==0){
 console.log(i);
 if(i==18){
     break;
 }else 
 console.log(" ,");
}
}
console.log();
//--------------------------------------------------find average of element of array-------------------------------------------------------------

let arrays =  [20,24,30,16];
let average = 0;
for(let i = 0 ; i < arrays.length; i++){
average +=arrays[i];
}
console.log("average : "+ (average / arrays.length));

//-------------------------------------------------------count t---------------------------------------------------------------------------------
let strings = "Hello our class starts at 9:30 am and it may completes by 4:30 pam";
let counts = 0;
for(let i = 0 ; i < strings.length; i++){
 if(strings.charAt(i)=='t'){
     counts++;
 }
}
console.log(counts);