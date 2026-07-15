/******************************************************************************
20.Write a class method using optional chaining to check if an optional property exists.
    E.g.: Input → this.address?.city
    Output → "Chennai" or undefined

*******************************************************************************/
class Person{
    constructor(name,address){
        this.name=name;
        this.address=address;
        
    }
    
    getCity(){
        return this.address?.city;
    }
}

const person1= new Person("Ahad",{ city: "Chennai"});

console.log(person1.getCity())

