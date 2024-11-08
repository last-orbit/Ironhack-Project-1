class Player {
  constructor(top, left, playerImage) {
    // maybe vehicletype
    this.gameScreen = document.getElementById('game-screen');
    this.top = top;
    this.left = left;
    this.width = 70;
    this.height = 100;
    this.directionX = 0;
    this.directionY = 0;
    //Adds ship
    this.element = document.createElement('img');
    this.element.src = playerImage;
        this.element.style.transform = 'rotate(90deg)';

    this.element.style.position = 'absolute';
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //add the image to the screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    //this keeps the car from going to far left
    if (this.left < 18) {
      this.left = 22;
    }
    //this keeps the car from going to far Right
    if (this.left + this.width > 1410) {
      this.left = 1400 - this.width;
    }
    //this keeps the player from going to far up
    if (this.top < -10) {
      this.top = 0;
    }
    //this keeps the player from going to far down
    if (this.top + this.height > 620  ) {
      this.top = 615 - this.height;
    }
    this.updatePosition();
  }
  updatePosition() {
    //actually moving the car on the screen
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
