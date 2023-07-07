class TransitonGreenFish extends MovableObject {

    height = 100;
    width = 100;
    x;
    y = 0 + Math.random() * 400;
    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight  = 0;

    SWIMMING_TRANSITION_GREEN_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.SWIMMING_TRANSITION_GREEN_FISH)
        this.x = 800 + Math.random() * 1300;
        this.x = 800 + Math.random() * 1300;
        this.animate();
        this.animateSwimming(this.SWIMMING_TRANSITION_GREEN_FISH);
        this.speed = 0.15 + Math.random() * 0.8
    }
    
    animate() {
        this.moveLeft()
    }
}
