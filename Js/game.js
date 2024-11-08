class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro');
    this.gameContainer = document.getElementById('game-container');
    this.gameScreen = document.getElementById('game-screen');
    this.endScreen = document.getElementById('game-end');
    this.scoreElement = document.getElementById('Score');
    this.livesElement = document.getElementById('lives');
    this.player = new Player(250, 0, playerImage);
    this.height = 100;
    this.width = 100;
    this.obstacle = [new Obstacles(this.gameScreen)];
    this.projectiles = [];
    //Game logic
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.isGameWon = false;
    this.canFire = true;
    this.fireCoolDown = 400;
    this.gameIntervalID = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frames = 0;
    //Game sounds
    this.explosion = new Audio('images/Sounds/Explosion_6.wav')
    this.explosion.volume = 0.2;
    this.themeMusic = new Audio('images/Sounds/retro_metal.ogg');
    this.themeMusic.volume = 0.4;
    this.themeMusic.loop = true;
    this.hitSound = new Audio('images/Hit 2 - Sound effects Pack 2.mp3');
    this.hitSound.volume = 0.8;
    this.pointSound = new Audio('images/Bleep_03.ogg');
    this.pointSound.volume = 0.6;
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


    if (this.frames === 5400) {
      this.isGameWon = true;
    }

    if (this.isGameWon === true) {
      clearInterval(this.gameIntervalId);
      this.gameWon();
    }
    if (this.isGameOver === true) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }

    if (this.frames % 80 === 0) {
      this.obstacle.push(new Obstacles(this.gameScreen));
    }
    if (this.frames % 140 === 0) {
      this.obstacle.push(new Obstacles(this.gameScreen));
    }
  }

  update() {
    //this calls the move method from the Player class
    this.player.move();
    // this.enemy.move();
    this.obstacle.forEach((oneObstacle, oneObstacleIndex) => {
      oneObstacle.move();
      // oneObstacle.spin();
      //this checks each oneObstacle if it collided with my player
      const didHitMyShip = this.player.didCollide(oneObstacle);
      if (didHitMyShip) {
        //play the hit sound
        this.hitSound.play();
        //subtract a life
        this.lives--;
        this.player.element.classList.add('got-hit');
        setTimeout(() => {
          this.player.element.classList.remove('got-hit');
        }, 1000);
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
            this.score+= 3;
            this.pointSound.play();
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

  gameWon() {
    console.log('game is won');
    const gameEndH1 = document.getElementById('game-end-h1');
    const gameEndP = document.getElementById('game-end-p');
      this.themeMusic.pause();
      this.themeMusic.currentTime = 0;
      const EndSound = new Audio('images/Sounds/mixkit-discover-587.mp3');
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
    gameEndH1.innerText = 'Too Easy!';
    gameEndP.innerText = 'You have successfully navigated through the asteroid field!';
  }

  gameOver() {
    console.log('game is over');
    this.themeMusic.pause();
    this.themeMusic.currentTime = 0;

    const EndSound = new Audio('images/Sounds/mixkit-discover-587.mp3');
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
