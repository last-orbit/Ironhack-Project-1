class Obstacles {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.positions = [
            150, 0, 270, 470, 30, 310, 550, 110, 190, 390, 430, 230, 70, 350, 510,
        ];
        this.randomIndex = Math.floor(Math.random() * this.positions.length);
        this.top = this.positions[this.randomIndex];
        this.left = 1480;
        this.width = 80;
        this.height = 80;
        this.isExploded = false;

        this.element = document.createElement("img");
        this.element.src = "images/Obstacles/Items/Asteroids01.png";
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        //add the image to the screen
        this.gameScreen.appendChild(this.element);
    }
    move() {
        this.left -= 3;
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }

}