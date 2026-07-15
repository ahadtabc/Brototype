// function hotel(...foods) {  //rest
//     console.log(...foods);      //spread
// }

// function getfood(...foods){
//         return foods;
// }
// const food1 = "Alfam";
// const food2 = "Mandi";
// const food3 = "Shawaya";
// const food4 = "Majboos";
// const food5 = "Broast";

// // hotel(food1, food2, food3, food4, food5);   //rest final to display

// const foods=getfood(food1,food2,food3,food4,food5);

// console.log(foods);


// function combineName(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineName("Mr", "Abdul", "Ahad", "T");

// console.log(fullName);


function sum(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function getAverage(...numbers) {

    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(80, 73, 57, 40);

console.log(total);
// console.log(`The Final is $${total}`);
