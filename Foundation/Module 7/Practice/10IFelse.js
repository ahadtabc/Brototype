
// let student = true;

// if (student) {
//     console.log("You're a Student");
// } else {
//     console.log("You're Not a Student");
// }

// let time = 9;

// if (time < 12) {
//     console.log("Good Morning");
// } else {
//     console.log("Good Afternoon");
// }

// let age = 16;
// let hasLiecence = true;

// if (age >= 16) {
//     console.log("You're Eligible for Liecence")

//     if (hasLiecence) {
//         console.log("You have already a Liecence ");
//     } else {
//         console.log("You have NOT a Liecence ");
//     }
// } else {
//     console.log("Sorry! Your age below 16");
// }

let Text = document.getElementById("mytextbox");
let Btn = document.getElementById("mybtn");

const Result = document.getElementById("myresult");
let age;


Btn.onclick = function() {
    age = Text.value;
    age = Number(age);

    if (age >= 100) {
        Result.textContent="Too OLD";
    } else if (age == 0) {
        
        Result.textContent="Just Born Baby";
    } else if (age >= 18) {
       
        Result.textContent="Enough Old to Use";
    } else if (age < 0) {
        
        Result.textContent="Age Below 0";
    } else {
        
        Result.textContent="You're right Person";
    }
}



