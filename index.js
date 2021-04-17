var currentValue = "x";
var winnerBlock;

window.addEventListener("load", function() {
    var startButton = document.querySelector(".startNewGame")
    startButton.addEventListener("click", clearAll);
    winnerBlock = document.querySelector(".winner-message");
});

function clearAll(){
    var cells = document.querySelectorAll(".cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove("x");
        cells[i].classList.remove("o");
        cells[i].addEventListener("click", setValue);
    }
    currentValue = "x";
    winnerBlock.innerText = "";
}


function setValue(){
    this.classList.add(currentValue);
    if (currentValue === "x"){
        currentValue = "o";
    } else {
        currentValue = "x";
    }
    this.removeEventListener("click", setValue);
    var result = getWinner();
    if (result === "x") {
    winnerBlock.innerText = "X wins!" 
    } else if (result === "o"){
    winnerBlock.innerText = "O wins!"
    } else if (result === "y") {
        winnerBlock.innerText = "standoff!"
    }
}