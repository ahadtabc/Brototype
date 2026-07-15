const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempt = 0;
let guess;
let running = true;


while (running) {

    guess = window.prompt(`Enter Number b/w ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid Number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid Number");
    }
    else {
        attempt++;
        if (guess > answer) {
            window.alert("TOO HIGH !!!");
        } else if (guess < answer) {
            window.alert("TOO LOW !!!");

        } else if () {
            window.alert(`Correct✅ The ${answer}. It attemps ${attempt}`);
            running = false;

        }
    }

}