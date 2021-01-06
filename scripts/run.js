const Game = () => {
    
    let playerScore = 0;
    let computerScore = 0;

    // init game
    const initGame = () => {

        const initBtn = document.querySelector(".intro button");
        const initScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        // if initBtn is clicked, add fadeOut to class of intro page
        initBtn.addEventListener("click", () => {
            initScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    
    // play rps match
    const playRPS = () => {

        const playerOption = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // computer option
        const computerOptions = ["rock", "paper", "scissors"];

        const indexSelector = (maxInt) => {
            return Math.floor(Math.random() * Math.floor(maxInt));
        }
        console.log(indexSelector(2));
    };
    playRPS();

    // transition 
    initGame();

};

// init script
Game();