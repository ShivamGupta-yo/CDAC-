//  Create a function name greet and print the hello message 
function greet(){
    console.log("Hello")
}
greet();

// Create a function larger and use ternary operator to get print greater number from 18,20

function larger(a , b){
    return (a > b) ? "The larger number is: "+ a : "The larger number is : " +b
}
console.log(larger(18, 20));

//  Calculate the simple interest.

function si(p = prompt("Enter principal amount: "),r =prompt("Enter rate of interest: "),t =prompt("Enter time (in years): ")){

    return ((p*r*t)/100)
}

alert("Simple Interest is :"+si());

// Create a function which check the vowels in string.
function vowelChecker(str){
    let vowel = ['a','e', 'i', 'o', 'u'];
    for(let i=0; i< str.length ; i++){
        if(vowel.includes(str[i])){
            console.log(str[i]+' is a Vowel');

        }else{
            console.log(str[i]+' is Not a Vowel')
        }


    }
}
vowelChecker("Shivam Gupta")

// Create function which calculate the area of square

function square(a = prompt("Enter the side of square: ")){
return a*a
}
alert('Area of Square is:'+square())

// Create a class fruit initialize fruit name and type, display them using show method
class Fruit{
    constructor(name,type){
        this.name = name;
        this.type = type;

    }
    show(){
        console.log(`The is ${this.name} and it is a  ${
            this.type }`)
    }
}

let f = new Fruit(" Apple ","Fruit")
console.log(f.show())

// . Make a calculator with name class calculate and then make methods add, sub, multiply, div.
class Calculator {
    constructor(x = prompt("Enter the value for x: "),y= prompt("Enter the value for y: ")){
        this.x= x;
        this.y= y;
    }
    add() {
        return (parseFloat(this.x) + parseFloat(this.y) )
    }
    sub() {
        return  (parseFloat(this.x) - parseFloat(this.y) )
    }
    mul() {
        return (parseFloat(this.x) * parseFloat(this.y) )
    }
    div() {
        return  (parseFloat(this.x) / parseFloat(this.y) )
    }
    rem() {
        return  (parseFloat(this.x) % parseFloat(this.y) )
    }
}
let calc = new Calculator()
console.log("Addition : "+calc.add())
console.log("Subtraction : "+calc.sub())
console.log("Multiplication : "+calc.mul())
console.log("Division : "+calc.div())
console.log("Remainder: " + calc.rem())

//  Create an example which shows the polymorphism
class Animal{
    eat(){
        console.log('Eating...')
    }

}
class Dog extends Animal{
    eat(){
        super.eat();
    }
    bark(){
        console.log('Barking...')
    }

}
class Cat extends Animal{
    eat(){
           super.eat()
    }
    meow(){
        console.log('Meowing...')
    }

}
let dog=new Dog()
dog.bark()
dog.eat()
console.log("------------------------")
let cat=new Cat()
cat.meow()
cat.eat()

