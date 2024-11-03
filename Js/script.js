window.onload = function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  let game; // added

  startButton.addEventListener('click', function () {
    startGame();
  });

  function startGame() {
    console.log('start game');
    //   startButton.style.backgroundColor = "black"
    startScreen.style.display = 'none';
    // game = new Game(); // added

    game.start(); // added
  }
};
