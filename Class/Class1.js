var Carabc = /** @class */ (function () {
    function Carabc() {
    }
    Carabc.prototype.accelerate = function () {
        console.log("".concat(this.brand, " is accelerating at ").concat(this.speed, " Km/h."));
    };
    return Carabc;
}());
var myCar = new Carabc();
myCar.brand = "Ford";
myCar.speed = 120;
myCar.accelerate();
