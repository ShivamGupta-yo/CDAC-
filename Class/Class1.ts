class Carabc{
    brand: string;
    speed: number;
    accelerate(){
        console.log(`${this.brand} is accelerating at ${this.speed} Km/h.`)
    }
}

var myCar = new Carabc();
myCar.brand = "Ford";
myCar.speed = 120;
myCar.accelerate();