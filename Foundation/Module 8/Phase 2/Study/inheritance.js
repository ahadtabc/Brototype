class Animal {

    sound(){
        console.log("Animal make Sound")
    }
}

class Cat extends Animal{

    sound(){
        console.log("Cat make Meow! Meow!")
    }
}

const myanimal =new  Cat();
myanimal.sound();

