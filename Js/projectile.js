class Projectile {
  constructor(positionX, positionY) {
    this.gameScreen = document.getElementById('game-screen');
    this.left = positionX;
    this.top = positionY;
    this.damage = 10;
    this.width = 75;
    this.height = 100;
    //this is creating the player and adding them to the screen
    this.element = document.createElement('img');
    this.proImg = [
      'images/Weapons/row-1-column-1.png',
      'images/Weapons/row-1-column-2.png',
      'images/Weapons/row-1-column-3.png',
      'images/Weapons/row-1-column-4.png',
    ];
    this.proImgIndex = 0;
    this.element.style.transform = 'rotate(90deg)';
    this.element.src = this.proImg[this.proImgIndex];
    this.element.style.position = 'absolute';
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //add the image to the screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += 4;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
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
  fireProjectile() {
    setInterval(() => {
      if (this.proImgIndex === this.proImg.length - 1) {
        this.proImgIndex = 0;
        this.element.src = this.proImg[this.proImgIndex];
      } else {
        this.proImgIndex++;
        this.element.src = this.proImg[this.proImgIndex];
      }
    }, 600);
    // this.oneProjectile.element.remove();
  }
}
