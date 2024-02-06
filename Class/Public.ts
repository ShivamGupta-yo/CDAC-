class Example{
    public variable:string;
    constructor(value:string){
this.variable=value;

    }
    public getVariable(): string{
        return this.variable;
    }
}

const ob = new Example("Shivam");
console.log(ob.variable);
console.log(ob.getVariable());
