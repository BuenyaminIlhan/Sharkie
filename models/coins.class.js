class Coins extends MovableObject {
    
    x = 400;
    y = 250;
    width = 50;
    height = 50;
    speedY = 0;

    constructor() {
        super();
        this.x = 400 + Math.random() * 1600;
        this.y = 10 + Math.random() * 500;
        this.width;
        this.height;
        this.speedY;
        this.loadImage('img/4. Marcadores/1. Coins/1.png');
    }
}