class Bike{

    constructor (model_name,color,price){
        this.model_name=model_name;
        this.color=color;
        this.price=price;
        console.log("Constructor Method");
    }

}

bikeDetails(){
    console.log("Bike: "+ this.model_name);
    console.log("Color: "+ this.color);
    console.log("Price: "+ this.price);

}

showPrice(){
    console
}

let bike1 = new Bike("Suzuki Gixxer","Black",91000);
let bike2 = new Bike("Ather 450","White",124000);


// console.log(bike1)
// console.log(bike2)
// console.log(bike2.price)

