const myTextbox = document.getElementById("textbox");

const myFahrenhiet = document.getElementById("toFahrenhiet");

const myCelsius = document.getElementById("toCelsius");

const myresult = document.getElementById("result");
let temp;

function convert() {
    if (myFahrenhiet.checked) {
        temp = Number(myTextbox.value);
        temp = temp * 9 / 5 + 32;
        myresult.textContent = temp.toFixed(1) + "°F";
    } else if (myCelsius.checked) {
        temp = Number(myTextbox.value);
        temp = (temp - 32) * (5 / 9);
        myresult.textContent = temp.toFixed(1) + "°C";
    } else {
        myresult.textContent = "Select a Unit";
    }

}
