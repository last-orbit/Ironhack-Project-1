# Space Wars 🚀

Click here to see deployed game

# Description 📕

Space Wars is a game where you control a small ship and dodge asteroids. You earn points when you shoot asteroids. The game ends either when you run out of lives or you outlast the timer. A score is calculated based off the number of asteroids you destroyed and displayed on the game over screen.

# Main Functionalities 🎮

- Ship can move in all directions using either the arrow keys or the WASD keys on your keyboard.
- The user can choose which ship they would like to use at start of the game.
-  On the bottom of the screen when the game screen loads there is displayed for some time a set of instructions on how to play before it disappears.
- The player can shoot a projectile with the press of the space button.
- While the user is playing the game they can also press Alt-left + C and it will unlock a special ship and add an additional 100 points to there score.
- Asteroids appear from the right side of the screen at random intervals.
- As the game progress, more asteroids are added to the screen.
- The player starts with three lives and when they are out of lives, the game over screen will appear.
- If the player last long enough, they get to experience the game won screen.

# Backlog Functionalities ⌨️

-Once the player has chosen their ship and hit the start button. a title card would appear explaining some backstory about space wars.
- Ensure that their are an increasing numbers of asteroids on the screen over time.
- Add power-ups for the player periodically that would start from the right of the screen and which they could pick and obtain special abilities.
- add an enemy class, that can shoot projectiles as well.
- Add a boss that can shoot projectiles back while asteroids are still incoming.
- On the Game Screen , add an animation for the ship so that it looks like it is flying.
- On the Game Intro Screen, the ship image changes when the player hovers over each ship.


# Technologies Used 💻
- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Canvas
- JS Classes
- JS Audio() and JS Image()

# States 🌍
- Start Screen
- Game Screen
- Game Over Screen

# Project structure 🌌

## Script.js

- window.onload()
  - audiobutton.addEventListener()
  - startButton.addEventListener()
  - restartButton.addEventListener()
  - document.addEventListener('keydown')
- document.addEventListener('keyup')
- player1.addEventListener()
- player2.addEventListener()
- startGame();

## Game.js
    this.startScreen;
    this.gameContainer;
    this.gameScreen;
    this.endScreen;
    this.scoreElement;
    this.livesElement;
    this.player;
    this.height;
    this.width;
    this.obstacle;
    this.projectiles;

    this.score;
    this.lives;
    this.isGameOver;
    this.isGameWon;
    this.canFire;
    this.fireCoolDown;
    this.gameIntervalID;
    this.gameLoopFrequency;
    this.frames;
    //Game sounds
    this.explosion;
    this.explosion.volume;
    this.themeMusic;
    this.themeMusic.volume;
    this.themeMusic.loop;
    this.hitSound;
    this.hitSound.volume;
    this.pointSound;
    this.pointSound.volume;
- start()
- gameloop()
- update()
- gameWon()
- gameOver()

## Player.js

    this.gameScreen;
    this.top;
    this.left ;
    this.width;
    this.height ;
    this.directionX ;
    this.directionY ;
    this.element;
    this.element.src ;
    this.element.style.transform ;
    this.element.style.position ;
    this.element.style.height;
    this.element.style.width;
    this.element.style.top;
    this.element.style.left;
    this.gameScreen.appendChild(this.element);
- move()
- updatePosition()
- didCollide(obstacle)

## Obstacles.js
    this.gameScreen;
    this.positions;
    this.randomIndex;
    this.top;
    this.left;
    this.width;
    this.height;
    this.element;
    this.element.src ;
    this.element.style.position;
    this.element.style.height ;
    this.element.style.width;
    this.element.style.top;
    this.element.style.left ;
    this.gameScreen.appendChild(this.element);
- move()
- updatePosition()

## Projectile.js
    this.gameScreen;
    this.left;
    this.top;
    this.damage;
    this.width;
    this.height;
    this.element ;
    this.proImg;
    this.proImgIndex;
    this.element.style.transform ;
    this.element.src ;
    this.element.style.position;
    this.element.style.height ;
    this.element.style.width;
    this.element.style.top;
    this.element.style.left ;

    this.gameScreen.appendChild(this.element);
- move()
- updatePosition()
- fireProjectile()

# Links


-[Slides Link](https://docs.google.com/presentation/d/1dNHSQd47RoV-iBnu9RzSZhnua8i0PHlklpIUw3_lO_0/edit#slide=id.p)

-[Github repository Link](https://github.com/last-orbit/Space-Wars)

-[Deployment Link](https://last-orbit.github.io/Space-Wars/)
