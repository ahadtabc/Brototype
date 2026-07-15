let myobj1={
    firstname:"Abdul",
    lastname:"Ahad"
}

let myobj2={
     firstname:"Muhammed",
    lastname:"Nabhan"
}

let myobj3={
    firstname:"Muhammed",
    lastname:"Musthafa"
}

let fullsample=function(Place,age){
    console.log(`The ${this.firstname} ${this.lastname}'s place is ${Place} and age is ${age}`);
}

fullsample.call(myobj1,"Malappuram","29")

fullsample.apply(myobj2,["Calicut","22"]);

let mybind =fullsample.bind(myobj3,"Kottakkal","17");
mybind()
