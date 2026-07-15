function rollDice() {

    let numofDice = document.getElementById("numofDice").value;
    let diceResult = document.getElementById("diceResult");
    let diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);

        images.push(
            `<img src="dice_image/${value}.png" alt="Dice ${value}">`
        );
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}