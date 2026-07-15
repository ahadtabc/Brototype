class Calculator {

    add(a,b){
        console.log(a+b);
    }

    
    subtract(a,b){
        console.log(a-b);
    }

    
    Multi(a,b){
        console.log(a*b);
    }
}

const mycal=new Calculator();
mycal.add(5,3)
mycal.subtract(10,7);
mycal.Multi(3,5);