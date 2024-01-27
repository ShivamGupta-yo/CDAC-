// function square(n){
//     return n*n
// }
// console.log(square(5))

// function greet(name){
// return ("Hello "+ name + " !");
    
// }
// console.log(greet("Shivam"))


// function add(a,b){
//     return ("The sum of "+ a+ " and "+ b +" is:" + (a+b))
// }
// console.log((add(44,44)))

// function greet1(name = "Shivam"){
// return ("Hello "+name)
// }
// console.log(greet1());
// console.log(greet1("Palak"))

// const mul = function(c,d){
//     return c * d;

// }
// console.log(mul(4,5))

// let sq = num=> num*num;
// console.log(sq(5))

// function greet(firstName){
//     function sayHello(){
//         console.log("Hello" +firstName);var z= y.toUpperCase();
//     }
//     return sayHello();
// }
// greet("Shivam")

// function capital(name = prompt("Enter Name :")){
 
//  var y = name.charAt(0).toUpperCase();
//  var z = y+ name.slice(1)
//  return z;
// }
// console.log(capital());

// class School{
//     constructor(name, date){
//         this.name = name;
//         this.date = date;
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and my age is ${this.date}`)
//     }
// }

// let x1 = new School("Shivam", 19);
// let x2 = new School("Gupta",25);

// console.log(x1.name)
// console.log(x2.name)
// console.log(x1.date)
// console.log(x2.date)
// console.log(x1.greet())
// Static method

// class Addition{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(Addition.add(1,2));

// INHERITANCE

// class Person{
//     constructor(name){
//         this.name=name;

//     }
//     greet(){
//         console.log(`Hi I am ${this.name}`)
//     }
// }
// class Student extends Person{

// }


// let student1 = new Student('Shivam')
// student1.greet();


// class Employee extends School{
//  constructor(name,date,position){
//     super(name,date);
//     this.position=position;
//  }

//     work(){
//         console.log(`${this.name} is working as a  ${this.position}`)
//     }
// }

// const x3 = new Employee('ABC',23,'Manager')
// x3.greet();
// x3.work();

// Polymorphism
// class Animal {
//     speak(){
//         console.log("Iam an animal")
//     }
// }
// class Dog extends Animal{
//     speak(){
//         console.log("This is a DOG")
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("This is a cat");
//     }
// }

// const pet = new Dog();
// pet.speak() 


class Car{
constructor(model,color,name){
    this.model=model;
    this.color=color;
    this.name= name;
}
desc(){
    console.log(`My car is ${this.name} and its latest model is ${this.model} also its color is ${this.color} `)
}
}

let x1 = new Car("VMC","red","Bugatti");
console.log(x1.desc());

class Owner extends Car{
    constructor(model,color,name,oname){
        super(model,color,name);
        this.oname= oname;
    }
   desc(){
console.log(`The name of the owner is ${this.oname} and is driving ${this.name}`)
    }
}

let x3 = new Owner("VMC","Red","Bugatti","Shivam");
console.log(x3.desc())

