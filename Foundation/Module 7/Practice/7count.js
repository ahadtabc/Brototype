const cDisplay = document.getElementById("counterDisplay");
const increasebttn = document.getElementById("increbtn");
const decreasebttn = document.getElementById("decrebtn");
const resetbttn = document.getElementById("resetbtn");
let count = 0;

// increasebttn.onclick = function () {
//     count++;
//     cDisplay.textContent = count;
// }

increasebttn.onclick = () => {
    count++;
    cDisplay.textContent = count;
}

decreasebttn.onclick = function () {
    count--;
    cDisplay.textContent = count;
}

resetbttn.onclick = function () {
    count = 0;
    cDisplay.textContent = count;
}

