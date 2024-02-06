class Parent{
    protected variable:string;
    constructor(v:string){this.variable=v;}

}
class child extends Parent{
    logVariable(){
        console.log(this.variable)
    }
}

const ob = new child("Shivam Gupta");
ob.logVariable(); 