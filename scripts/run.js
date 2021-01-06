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

        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        // computer option
        const computerOptions = ["rock", "paper", "scissors"];

        // returns [0, maxInt-1] where maxInt >= 1 
        const indexSelector = (maxInt) => {
            return Math.floor(Math.random() * Math.floor(maxInt));
        };
        
        // for each element within options (rock, paper, scissors), assign a computer option
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerChoice = computerOptions[indexSelector(3)];

                // determine game conditions
                compareHands(this.textContent, computerChoice);

                // update images of pick
                // note the backtick, $ indicates variable
                playerHand.src = `assets/img/${this.textContent}.png`;
                computerHand.src = `assets/img/${computerChoice}.png`;
            });
        });
    };

    const compareHands = (playerC, computerC) => {

        // update top text 
        const winner = document.querySelector(".winner");

        // tie
        if (playerC === computerC) {
            winner.textContent = "Tie"
            return;
        }

        // winning conditions
        else if (playerC === "rock" && computerC === "scissors") {
            winner.textContent = "You win"
            return;
        }

        else if (playerC === "paper" && computerC === "rock") {
            winner.textContent = "You win"
            return;
        }

        else if (playerC === "scissors" && computerC === "paper") {
            winner.textContent = "You win"
            return;
        }

        // catch for loss
        else {
            winner.textContent = "You lose"
            return;
        }

    };
    
    // transition 
    initGame();
    playRPS();

};

// init script
Game();