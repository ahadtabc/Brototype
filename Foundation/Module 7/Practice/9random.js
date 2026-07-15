// let randomNum = Math.random();          //random = generate 0. to 1 under any number
// let randomNum6 = Math.random() * 6;
// let randomNum7 = Math.floor(Math.random() * 7);

// console.log(randomNum);
// console.log(randomNum6);
// console.log(randomNum7);

// let min = 50;
// let max = 100;

// let random = Math.floor(Math.random() * (max - min) + min);

// console.log(random);

const Button = document.getElementById("myBtn");
const Label1 = document.getElementById("myLabel1");
const Label2 = document.getElementById("myLabel2");
const Label3 = document.getElementById("myLabel3");
const Label4 = document.getElementById("myLabel4");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

Button.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
    Label4.textContent = randomNum4;
}

