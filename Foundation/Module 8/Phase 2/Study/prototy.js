function Car(brand) {
    this.brand=brand;
}

Car.prototype.drive=function(){
    console.log(`${this.brand} is sporty with more power`);
}

const mycar1= new Car("Bmw");
const mycar2=new Car("Mercedes");

mycar1.drive();
mycar2.drive();
