class TransitonGreenFish extends MovableObject {
    x = 200 + Math.random() * 500
    y = 0 + Math.random() * 400

    SWIMMING_TRANSITION_GREEN_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];
    constructor(imagePath,x,y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.SWIMMING_TRANSITION_GREEN_FISH)
        this.animate();
        this.animateSwimming(this.SWIMMING_TRANSITION_GREEN_FISH);
        this.speed = 0.15 + Math.random() * 0.8
    }
    animate() {
        this.moveLeft()
    }
}
