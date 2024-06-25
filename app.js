let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

function drawGame() {
    console.log("The game is draw");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

function showWin(userWin, userChoice, compChoice) {
    if(userWin) {
        userScore++; 
        userScorePara.innerText = userScore
        console.log("You Win!");
        msg.innerText = `You Win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore
        console.log("You Lose!");
        msg.innerText = `You Lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
   console.log("user choice is : ", userChoice);      
   //generate computer choice
   const compChoice = genCompChoice();   
   console.log("comp choice is : ", compChoice);      
   
   if(userChoice === compChoice) {
      drawGame();
   } else {
    let userWin = true;
    if(userChoice === "rock") {
        //compChoice --> paper or scissors
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        //compChoice --> rock or Scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        //compChoice --> rock or paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin, userChoice, compChoice);
   }
};
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was Clicked", userChoice);
        playGame(userChoice);
    });
});
