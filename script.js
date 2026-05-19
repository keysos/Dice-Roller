const inputDice = document.getElementById("input-number");
const diceContainer = document.querySelector(".dice-container");
const rollDiceBtn = document.getElementById("roll-dice");
const results = document.getElementById("dice-results");
const diceSum = document.getElementById("dice-sum");

const diceFaces = {
    1: [[2, 2]],

    2: [
        [1, 1],
        [3, 3]
    ],

    3: [
        [1, 1],
        [2, 2],
        [3, 3]
    ],

    4: [
        [1, 1],
        [1, 3],
        [3, 1],
        [3, 3]
    ],

    5: [
        [1, 1],
        [1, 3],
        [2, 2],
        [3, 1],
        [3, 3]
    ],

    6: [
        [1, 1],
        [2, 1],
        [3, 1],
        [1, 3],
        [2, 3],
        [3, 3]
    ]
};


rollDiceBtn.addEventListener("click", () => {
    diceContainer.innerHTML = "";
    results.textContent = "Dice results: ";
    diceSum.textContent = "Sum of all dices: ";
    generateDice(Math.abs(Number(inputDice.value)));
})

function randomNumber () {
    return Math.floor(Math.random() * 6) + 1;
}

function toggleResults(show) {
    const display = show ? "block" : "none";

    diceSum.style.display = display;
    results.style.display = display;
}

function generateDice (number) {

    let sum = 0;

    for (let i = 0; i < number; i++) {
        const dice = document.createElement("div");
        dice.classList.add("dice");
        diceContainer.appendChild(dice);

        const diceValue = randomNumber();
        sum += diceValue;

        const positions = diceFaces[diceValue];

        positions.forEach(([row, col]) => {
            createDots(dice, row, col, (diceValue === 1 ? "red" : "black"));
        })

        results.textContent += diceValue + ", ";
    }

    if (number === 0) {
        toggleResults(false);
        return;
    }

    diceSum.textContent += sum;
    toggleResults(true);
}

function createDots (dice, row, col, color) {
    const dot = document.createElement("div");

    dot.classList.add("dot");
    dot.style.gridRow = row;
    dot.style.gridColumn = col;
    dot.style.backgroundColor = color;

    dice.appendChild(dot)
}