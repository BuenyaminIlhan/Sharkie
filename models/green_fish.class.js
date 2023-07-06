class GreenFish extends MovableObject {
    height = 100;
    width = 100;
    x;
    y = 0 + Math.random() * 400
    offsetTop = 30;
    offsetBottom = 5;
    offsetLeft = 25;
    offsetRight  = 0;


    SWIMMING_GREEN_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    constructor(imagePath, x, y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.SWIMMING_GREEN_FISH)
        this.x = 500 + Math.random() * 1100;
        this.animate();
        this.animateSwimming(this.SWIMMING_GREEN_FISH);
        this.speed = 0.15 + Math.random() * 0.7

    }
    animate() {
        this.moveLeft()
    }

}