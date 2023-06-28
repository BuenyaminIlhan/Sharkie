class RedFish extends MovableObject {

    x = 200 + Math.random() * 500
    y = 0 + Math.random() * 400

    SWIMMING_RED_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];
    constructor(imagePath,x,y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.SWIMMING_RED_FISH)
        this.animate();
        this.animateSwimming(this.SWIMMING_RED_FISH);
        this.speed = 0.15 + Math.random() * 0.8
    }
    animate() {
        this.moveLeft()
    }
}