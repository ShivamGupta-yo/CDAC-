// var x=10;
// var y=20;
// var a=[1,2,3];
// var o= {n:'Heena', age:33}
// var name1= 'Shivam';
// var z = x+y;
// var name2= 'Gupta';
// console.log("Hello! My name is Shivam Gupta")
// console.log(z);
// document.write(x);
// document.write("<br>");
// document.write(a);
// console.log(o)
// var str3 = name1 + name2;
// document.write(str3);
// Boolean= document.write(10>9)
// Operators and Expressions
// var a = 9;
// var b = "9"

// console.log(a==b)
// console.log(a===b)

// document.write('<br>');

// document.write((100+8)/(2*4))

// var a = 14
// var age = 18

// if(a>age){
//     console.log('you are eligible to vote')
// }

// else{
//     console.log('sorry you are not eligible for voting');
// }

// let a = 5;
// let b = 10;
// document.write("a="+a);
// document.write("<br>")
// document.write("b="+b);
// if(a>b){
//     console.log("a is greater than b")

// }
// else if (a<b){
//     console.log("a is lesser than b")
// }
// else{
//     console.log("a is equal to b")
// }

// let marks = 20
//  if(marks>90){
//     document.write("A");
// }
// else if(marks>=60 && marks<=90){
//     document.write("B");
// }
// else if(marks>=60 && marks<=40){
//     document.write("C");
// }


// else {
//     document.write("D");
// }

// let x = "yes"
// switch (x) {
//     case "yes":
//         console.log("yes")
//         break;
//     case "no":
//         console.log("No")
//         break;
//     case "maybe":
//         console.log("Maybe")
//     default:
//         console.log("Nothing to see here")
//         break;
// }


// var a = 5;
// var b = 10;
// var c = 20;
// document.write("a="+a)
// document.write("<br>")
// document.write("b="+b)
// document.write("<br>")
// document.write("c="+c)
// document.write("<br>")
// if(a>b && a>c){
//     document.write('a is the largest...')
// }
// else if(b>c && b>a){
//     document.write('b is the largest...')
// }
// else{
//     document.write('c is the largest...');
// }

// let d = 0;
// let e= -1;
// let f = -3;
// let g = 2;

// // document.write("["+d+","+e+","+f+","+g+"]")

// if(e<d && e<f && e<g){
//     console.log(e)
//     if(d<f && d<g && d>e ){
//         console.log(d,e)
//     }
//     if(e>f && e<g){
//         console.log(d,f,e)
//     }
//     if(f<g && f>e){
//         console.log(d,f,e,g)
//     }
      
// }
// if(d<e && d<f && d<g){
//     console.log(d)
//     if(e<f && e<g ){
//         console.log(d,e)
//     }
//     if(e>f){
//         console.log(d,f,e)
//     }
//     if(f<g && e>f){
//         console.log(d,f,e,g)
//     }
    
//     else{
//         console.log(d,f,g,e)
//     }

    
// }
// if(f<e && f<e && f<g){
//     console.log(f)
//     if(e<d && e<g && e>f ){
//         console.log(f,e)
//     }
//     if(d<g && d>e && d>f){
//         console.log(f,e,d)
//     }
//     if(g>d){
//         console.log(f,e,d,g)
//     }
    
//     else{
//         console.log(f,e,g,d)
//     }

    
// }
// if(g<e && g<f && g<d){
//     console.log(g)
//     if(e<f && e<d && e>g){
//         console.log(g,e)
//     }
//     if(d<g && d>f && d>e){
//         console.log(g,e,d)
//     }
//     if(f>d){
//         console.log(g,e,d,f)
//     }
    
//     else{
//         console.log(g,e,f,d)
//     }

    
// }

// let x = 20
// let y = 0
// let z = 30
// max = (x>y && x>z)?x:(y>z && y>x)?y:z;
// console.log(max)

// const age = 20
// const message = age>=20?"Palak aaja party krne":"Palak mt aa party krne";
// console.log(message)

// let marks = 95
// let result = (marks<40)?"Unsatisfactory":(marks<60)?"Average":(marks<80)?"Good":"Excellent";
// console.log(result)



document.write("<h1>This is Assignment 7</h1>")
document.write("<br>")
let year=1992;
if(year%4==0){
    document.write("Leap Year");
    
}
else{
    document.write("Not Leap Year");
}

document.write("<br>")
let num = 22
if(num%2==0){
    document.write("Number is Even")
}
else{
    document.write("Number is Odd")
}
document.write("<br>")

let a = 5;
let b = 6;
 area = (0.5*b*a)
document.write(area);
document.write("<br>")

let n = 27;
if(n%3==0 || n%7!=0){
    document.write("n is the multiple of 3 but not of 7")
}
else if(n%3!=0 ||n%7==0){
    document.write("n is the multiple of 7 but not of 3")
}

let r = 25;
area = (3.14*r*r)
document.write("The Area of Circle is "+area)
