const startScreen = document.querySelector('#game-intro');
const gameScreen = document.querySelector('#game-screen');
const endScreen = document.querySelector('#game-end');


class Game {
    constructor(startScreen, gameScreen, endScreen, player, height, width, obstacles, score, lives, gameIsOver, gameIntervalID, gameLoopFrequency) {
        this.startScreen = startScreen;
        this.gameScreen = gameScreen;
        this.endScreen = endScreen;
        this.player = player;
        this.height = height;
        this.width = width;
        this.obstacles = obstacles;
        this.score = score;
        this.lives = lives;
        this.gameIsOver = gameIsOver;
        this.gameIntervalID = gameIntervalID;
        this.gameLoopFrequency = gameLoopFrequency;


        function start() {
            /*Sets the  height and the width of the game screen */
            this.gameScreen.style.height = `${this.height}px`;
            this.gameScreen.style.width = `${this.width}px`;
            // Hide the start screen
            this.startScreen.style.display = 'none';

            // Show the game screen
            this.gameScreen.style.display = 'block';

            // Runs the gameLoop on a frequency of 60 times per second. Also stores the ID of the interval.
            this.gameIntervalId = setInterval(() => {
                this.gameLoop();
            }, this.gameLoopFrequency);
        }

        function gameLoop() {
            console.log("in the game loop");

            this.update();

            // If "gameIsOver" is set to "true" clear the interval to stop the loop
            if (this.gameIsOver) {
                clearInterval(this.gameIntervalId)
            }

            function update() {
                console.log("in the update")
            }
        }
    }
}