function addition(a,b){
    return a+b;
}

console.log(addition(100,200))
// ----------------------------------------

function square(num){
    return num*num;
}
console.log(square(5))

// what is pure function?
// Pure function which  only uses its input values and always producesd same result without changing any external data
// It always return same output for the same input
//doesn't modifying or depend anything outside the function(no side effects)

// ----------------------------------------------
// impure function?
    // A function have different results is called impure function,ie,means when the function depends on external variable `in here count', So it have side effects
let count =0;

function counter(){
    count++;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

