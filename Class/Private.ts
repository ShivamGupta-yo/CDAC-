class Example{
   private variable:string;
    constructor(value:string){
this.variable=value;

    }
    private getVariable(): string{
        return this.variable;
    }
}

const ob = new Example("this is the private access modifier");
console.log(ob.variable);
console.log(ob.getVariable());
            