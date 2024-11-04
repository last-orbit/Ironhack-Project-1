class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro');
      this.gameContainer = document.getElementById('game-container');
      this.gameScreen = document.getElementById('game-screen')
    this.endScreen = document.getElementById('game-end');
    this.scoreElement = document.getElementById('score');
    this.livesElement = document.getElementById('lives');
      this.player = new Player(0,0,"../images/Ships/Spaceship02.png");
    this.height = 100;
    this.width = 100;
    // this.obstacles = [new obstacles(this.gameContainer)];
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.gameIntervalID = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frames = 0;
  }

  start() {
    /*Sets the  height and the width of the game screen */
    this.gameContainer.style.height = `${this.height}%`;
    this.gameContainer.style.width = `${this.width}%`;
    // Hide the start screen
    this.startScreen.style.display = 'none';

    // Show the game screen
    this.gameContainer.style.display = 'flex';

    // Runs the gameLoop on a frequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    // console.log("in the game loop");
    this.frames++;
    this.update();
    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.isGameOver === true) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    } //Add obstacles and enemies below line 42 in game.js
  }
  // This causes the player & obstacles to move & , and did to function
  update() {
    //this calls the move method from the Player class
    this.player.move();
    //update the lives DOM to the new value
    this.livesElement.innerText = this.lives;
  }

  gameOver() {
    console.log('game is over');
    this.gameContainer.style.display = 'none';
    this.endScreen.style.display = 'flex';
  }
}
