let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const resetGame = document.querySelector("#btn");

let playerScorePara = document.querySelector("#player-score");
let computerScorePara = document.querySelector("#computer-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        playerScore++;
        playerScorePara.innerText = playerScore;
        message.innerText = `You win! your ${userChoice} beat ${compChoice}`;
        message.style.backgroundColor = "green";
        message.style.color = "white";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        message.style.color = "white";
    };
};

const drawGame = () => {
    message.innerText = "Game draw! play again";
    message.style.backgroundColor = "#bee9e8";
    message.style.color = "black";
}


const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false: true;
        } else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

btn.addEventListener("click", () => {
    playerScore = 0;
    playerScorePara.innerText = playerScore;
    computerScore = 0;
    computerScorePara.innerText = computerScore;
    message.innerText = "Make your selection"
    message.style.backgroundColor = "#bee9e8";
    message.style.color = "black";
})