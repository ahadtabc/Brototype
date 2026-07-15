class Latop{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }

    details(){
        console.log(`The laptop is ${this.brand} and cost of ${this.price} Rupees Only`);
    }
}

const myLaptop =new Latop("Acer","53000");

myLaptop.details();