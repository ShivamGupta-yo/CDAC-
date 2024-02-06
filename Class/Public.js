var Example = /** @class */ (function () {
    function Example(value) {
        this.variable = value;
    }
    Example.prototype.getVariable = function () {
        return this.variable;
    };
    return Example;
}());
var ob = new Example("Shivam");
console.log(ob.variable);
console.log(ob.getVariable());
