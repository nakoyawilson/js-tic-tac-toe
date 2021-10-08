const playerTurn = document.querySelector(".player-turn");
const spaces = document.querySelector(".spaces");
const topLeft = document.querySelector(".top-left");
const topMiddle = document.querySelector(".top-middle");
const topRight = document.querySelector(".top-right");
const middleLeft = document.querySelector(".middle-left");
const middleMiddle = document.querySelector(".middle-middle");
const middleRight = document.querySelector(".middle-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomMiddle = document.querySelector(".bottom-middle");
const bottomRight = document.querySelector(".bottom-right");
const results = document.querySelector(".results");
const playAgain = document.querySelector(".play-again")
const thanks = document.querySelector(".thanks");
let turn = 0;
let symbol = "";

spaces.addEventListener("click", (e) => {
    if (turn % 2 == 0) {
        playerTurn.innerHTML = "Player One's Turn";
        symbol = "X";
    } else {
        playerTurn.innerHTML = "Player Two's Turn"
        symbol = "O";
    }
    if (e.target.classList.contains("top-left")) {
        topLeft.style.color = "#000";
        topLeft.innerHTML = symbol;
        topLeft.disabled = "true";
    } else if (e.target.classList.contains("top-middle")) {
        topMiddle.style.color = "#000";
        topMiddle.innerHTML = symbol;
        topMiddle.disabled = "true";
    } else if (e.target.classList.contains("top-right")) {
        topRight.style.color = "#000";
        topRight.innerHTML = symbol;
        topRight.disabled = "true";
    } else if (e.target.classList.contains("middle-left")) {
        middleLeft.style.color = "#000";
        middleLeft.innerHTML = symbol;
        middleLeft.disabled = "true";
    } else if (e.target.classList.contains("middle-middle")) {
        middleMiddle.style.color = "#000";
        middleMiddle.innerHTML = symbol;
        middleMiddle.disabled = "true";
    } else if (e.target.classList.contains("middle-right")) {
        middleRight.style.color = "#000";
        middleRight.innerHTML = symbol;
        middleRight.disabled = "true";
    } else if (e.target.classList.contains("bottom-left")) {
        bottomLeft.style.color = "#000";
        bottomLeft.innerHTML = symbol;
        bottomLeft.disabled = "true";
    } else if (e.target.classList.contains("bottom-middle")) {
        bottomMiddle.style.color = "#000";
        bottomMiddle.innerHTML = symbol;
        bottomMiddle.disabled = "true";
    } else if (e.target.classList.contains("bottom-right")) {
        bottomRight.style.color = "#000";
        bottomRight.innerHTML = symbol;
        bottomRight.disabled = "true";
    }
    checkForWinner(symbol);
    turn++;
})

playAgain.addEventListener("click", (e) => {
    if (e.target.classList.contains("yes")) {
        console.log("clicked")
        location.reload();
    } else if (e.target.classList.contains("no")) {
        thanks.style.display = "block";
        document.querySelector(".yes").disabled = "true";
    }
})

function checkForWinner(symbol) {
    const allButtons = document.querySelectorAll(".spaces button");
    if ((topLeft.innerHTML === symbol && topMiddle.innerHTML === symbol && topRight.innerHTML === symbol) || (middleLeft.innerHTML === symbol && middleMiddle.innerHTML === symbol && middleRight.innerHTML === symbol) || (bottomLeft.innerHTML === symbol && bottomMiddle.innerHTML === symbol && bottomRight.innerHTML === symbol) || (topLeft.innerHTML.innerHTML === symbol && middleLeft.innerHTML === symbol && bottomLeft.innerHTML === symbol) || (topMiddle.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomMiddle.innerHTML === symbol) || (topRight.innerHTML === symbol && middleRight.innerHTML === symbol && bottomRight.innerHTML === symbol) || (topLeft.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomRight.innerHTML === symbol) || (topRight.innerHTML === symbol && middleMiddle.innerHTML === symbol && bottomLeft.innerHTML === symbol)) {
        if (symbol === "X") {
            results.innerHTML = "Player One Wins";
        } else {
            results.innerHTML = "Player Two Wins";
        }
        for (let button of allButtons) {
            button.disabled = "true";
        }
        playAgain.style.display = "block";
    }
}