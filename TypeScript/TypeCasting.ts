class Animal{
    sound: string;
    makeSound(){
        console.log(this.sound)
    }
}

class Dog extends Animal{
    constructor(){
        super();
        this.sound = "Woof!";
    }
}

let myDog = new Dog();
myDog.makeSound(); // Outputs Woof!

let n:number=5;
let s:string = n.toString();
console.log(typeof(s));
console.log(s);

let num:any=10;
let str:number = (num as string).length;
console.log(str);
console.log(typeof(str));