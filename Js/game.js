class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro');
    this.gameContainer = document.getElementById('game-container');
    this.gameScreen = document.getElementById('game-screen');
    this.endScreen = document.getElementById('game-end');
    this.scoreElement = document.getElementById('Score');
    this.livesElement = document.getElementById('lives');
    this.player = new Player(250, 0, 'images/Ships/Spaceship02.png');
    this.height = 100;
    this.width = 100;
    this.obstacle = [new Obstacles(this.gameScreen)];
    this.projectiles = [];
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.canFire = true;
    this.fireCoolDown = 400;
    this.gameIntervalID = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frames = 0;
    this.explosion = new Audio('/images/Sounds/Explosion_6.wav')
    this.explosion.volume = 0.2;
    this.themeMusic = new Audio('/images/Sounds/retro_metal.ogg');
    this.themeMusic.volume = 0.4;
    this.themeMusic.loop = true;
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
    this.themeMusic.play();
  }

  gameLoop() {
    this.frames++;
    this.update();
    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.isGameOver === true) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    } //Add obstacle and enemies below line 42 in game.js
    if (this.frames % 100 === 0) {
      this.obstacle.push(new Obstacles(this.gameScreen));
    }
  }
  // This causes the player & obstacles to move & , and did to function
  update() {
    //this calls the move method from the Player class
    this.player.move();
    this.obstacle.forEach((oneObstacle, oneObstacleIndex) => {
      oneObstacle.move();
      //this checks each oneObstacle if it collided with my player
      const didHitMyShip = this.player.didCollide(oneObstacle);
      if (didHitMyShip) {
        //subtract a life
        this.lives--;
        this.player.element.classList.add('flash');
        setTimeout(() => {
          this.player.element.classList.remove('flash');
        }, 500);
        if (this.lives === 0) {
          this.isGameOver = true;
        }
        //update the lives DOM to the new value
        this.livesElement.innerText = this.lives;
        this.obstacle.splice(oneObstacleIndex, 1);
        //remove the red car from the DOM
        oneObstacle.element.remove();
      }
      if (oneObstacle.left < -50) {
        //splice removes object from the array
        this.obstacle.splice(oneObstacleIndex, 1);
        //.remove method removes the ship the game screen
        oneObstacle.element.remove();
        //increase the score when the ship passes
        // this.score++;
        //update the DOM to have the new score
        this.scoreElement.innerText = this.score;
      }
      this.projectiles.forEach((oneProjectile, projectileIndex) => {
        oneProjectile.move();
        if (this.frames % 30 === 0) {
          oneProjectile.fireProjectile();
        }
        // this.obstacle.forEach((oneObstacle, obstacleIndex) => {
          // Check if the projectile collided with an obstacle
          if (oneProjectile.didCollide(oneObstacle)) {
            oneProjectile.element.src = 'images/Explosions/exp1preview.gif';
            // Remove the obstacle from the array
            this.obstacle.splice(oneObstacleIndex, 1);
            // Remove the obstacle from the DOM
            oneObstacle.element.remove();
            this.projectiles.splice(projectileIndex, 1);
            this.explosion.play();
            setTimeout(() => {
              // Splice the projectile out of the array
              // Remove the projectile from the DOM
              oneProjectile.element.remove();
            }, 500);
            // Increase the score when the obstacle is removed
            this.score++;
            // Update the DOM to have the new score
            this.scoreElement.innerText = this.score;
          }
          if (oneProjectile.left > 1500) {
            console.log('Projectile removed due to boundary condition');
            this.projectiles.splice(projectileIndex, 1);
            oneProjectile.element.remove();
          }

      });
    });
  }

  gameOver() {
    console.log('game is over');
    this.themeMusic.pause();
    this.themeMusic.currentTime = 0;

    const EndSound = new Audio('../images/Sounds/mixkit-discover-587.mp3');
    EndSound.volume = 1;
    EndSound.play();
    EndSound.loop = true;
    //Display functionality
    this.gameContainer.style.display = 'none';
    this.endScreen.style.display = 'flex';
    this.endScreen.style.flexDirection = 'column';
    //Updating Score
    const finalScoreElement = document.getElementById('final-score');
    finalScoreElement.innerText = this.score;
  }
}
