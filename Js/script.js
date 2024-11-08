window.onload = function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  //Create an audio element for the game-intro
  const audioButton = document.getElementById('audio-symbol');
  let myGame;

  const introSound = new Audio('images/Sounds/mixkit-1980-290.mp3');
  introSound.volume = 0.8;
  introSound.loop = true;
  introSound.play();
      audioButton.classList.add('volume-on'); // Add the "volume on" class

  const selectPlayer = new Audio('images/Sequence_02.ogg');
  selectPlayer.volume = 0.8;
  const startGameButton = new Audio('images/Click_Mid-High.wav');
  startGameButton.volume = 0.8;

  const fireProjectile = new Audio('images/Laser-weapon 6 - Sound effects Pack 2.mp3');
  fireProjectile.volume = 0.1;

  const secretSound = new Audio('images/Coins 6 - Sound effects Pack 2.mp3')
  secretSound.volume = 0.6;

  audioButton.addEventListener('click', function () {
    if (introSound.paused) {
      introSound.play();
      audioButton.classList.remove('volume-off');
      audioButton.classList.add('volume-on'); // Add the "volume on" class
    } else {
      introSound.pause();
      audioButton.classList.remove('volume-on');
      audioButton.classList.add('volume-off'); // Add the "volume off" class
    }
  });
  startButton.addEventListener('click', function () {
    introSound.pause();
    introSound.currentTime = 0;
    startGameButton.play();
    startGame();
  });

  restartButton.addEventListener('click', function () {
    window.location.reload();
  });

  document.addEventListener('keydown', (event) => {
    console.log('a key was pressed', event.code);
    //check for which button was pressed
    if (event.altKey && event.code === 'KeyC') {
      myGame.score += 100;
      myGame.scoreElement.innerText = myGame.score;
      secretSound.play();
      myGame.player.element.src = 'images/Ships/Main Ship - Base - Full health.png'
      // return changeChar()

    }
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      myGame.player.directionX = 4;
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      myGame.player.directionX = -4;
    }
    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
      myGame.player.directionY = -4;
    }
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      myGame.player.directionY = 4;
    }
    if (event.code === 'Space') {
      fireProjectile.play();
      console.log('firing projectile');
      const projectileLeft = myGame.player.left + 105;
      const projectileTop = myGame.player.top;
      if (myGame.canFire) {
        myGame.projectiles.push(new Projectile(projectileLeft, projectileTop));

        myGame.canFire = false;
        setTimeout(() => {
          myGame.canFire = true;
          // Reset canFire after cooldown
        }, myGame.fireCoolDown);
      }
    }
  });
  //when you release a key, stop the player from moving
  document.addEventListener('keyup', () => {
    myGame.player.directionX = 0;
    myGame.player.directionY = 0;
  });

  player1.addEventListener('click', function () {
    player1.classList.toggle('selected');
    player2.classList.remove('selected');
    selectPlayer.play();
  });

  player2.addEventListener('click', function () {
    player2.classList.toggle('selected');
    player1.classList.remove('selected');
    selectPlayer.play();
  });

  function startGame() {
    console.log('start game');
    if (player1.classList.contains('selected')) {
      playerImage = 'images/Ships/Spaceship01.png';
    } else if (player2.classList.contains('selected')){
      playerImage = 'images/Ships/Spaceship02.png';
    } else {
      playerImage = 'images/Ships/Spaceship01.png';
    }
    myGame = new Game();
    myGame.start(); // added
  }
};
