class Brand{

    car(){
        throw new Error("TESTING ONLY");
    }
}

class Bmw extends Brand{

    car(){
        console.log("M5 is the BMW's 4 door supercar")
    }
}

const mycar= new Bmw();

mycar.car();

// An Abstract Method is a method that is declared in a parent (base) class 
// but has no implementation. It is meant to be overridden (implemented) by child classes.