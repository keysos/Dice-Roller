const inputDice = document.getElementById("input-number");
const diceContainer = document.querySelector(".dice-container");
const rollDiceBtn = document.getElementById("roll-dice");
const results = document.getElementById("dice-results");

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
    results.textContent = "Dice results: "
    generateDice(Number(inputDice.value));
})

function randomNumber () {
    return Math.floor(Math.random() * 6) + 1;
}

function generateDice (number) {

    for (let i = 0; i < number; i++) {
        const dice = document.createElement("div");
        dice.classList.add("dice");
        diceContainer.appendChild(dice);

        const diceValue = randomNumber();

        const positions = diceFaces[diceValue];

        positions.forEach(([row, col]) => {
            createDots(dice, row, col, (diceValue === 1 ? "red" : "black"));
        })

        results.textContent += diceValue + ", ";
    }

    results.textContent = results.textContent.slice(0, -2);
}

function createDots (dice, row, col, color) {
    const dot = document.createElement("div");

    dot.classList.add("dot");
    dot.style.gridRow = row;
    dot.style.gridColumn = col;
    dot.style.backgroundColor = color;

    dice.appendChild(dot)
}