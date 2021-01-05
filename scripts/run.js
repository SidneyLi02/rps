const Game = () => {
    
    let playerScore = 0;
    let computerScore = 0;

    const initGame = () => {

        const initBtn = document.querySelector(".intro button");
        const initScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        // if initBtn is clicked, add fadeOut to class of intro page
        initBtn.addEventListener("click", () => {
            initScreen.classList.add("fadeOut");
        });

    };

    initGame();

};

Game();