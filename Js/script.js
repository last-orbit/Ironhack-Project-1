window.onload = function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  let myGame; // added

  startButton.addEventListener('click', function () {
    startGame();
  });

  restartButton.addEventListener('click', function () {
    window.location.reload();
  });

  document.addEventListener('keydown', (event) => {
    // console.log('a key was pressed', event.code);
    //check for which button was pressed
    
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
      console.log('firing projectile')
      const projectileLeft = myGame.player.left + 105;
      const projectileTop = myGame.player.top + 32;
      myGame.projectiles.push(new Projectile(projectileLeft, projectileTop));

      myGame.canFire = false;
      setTimeout(() => {
        myGame.canFire = true;
      console.log('canFire reset to true');
        // Reset canFire after cooldown
      }, myGame.fireCoolDown);
    } else {
      console.log('Cannot fire yet, cooldown in progress');

    }
  });
  //when you release a key, stop the player from moving
  document.addEventListener('keyup', () => {
    myGame.player.directionX = 0;
    myGame.player.directionY = 0;
  });

  function startGame() {
    console.log('start game');
    myGame = new Game();
    myGame.start(); // added
  }
};