 
function totalcalcu(discount,...prices){
    let total =prices.reduce((sum,prices)=>sum+prices,null);
    return total-(total*discount)
}

console.log(totalcalcu(0.1,20,30,40))
// ------------------------------------------------------------------the above is rest parameter 


let cars = ["Bmw", "Mercedes", "Audi", "Lexus", "Genesis", "alfa Romeo"];

const [first, second, ...reminig] = cars;

// console.log(first);
console.log(reminig);

// -----------------------------------------------------above is rest operator