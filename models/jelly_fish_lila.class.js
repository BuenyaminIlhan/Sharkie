class JellyFishLila extends MovableObject {

    height = 100;
    width = 100;
    x
    y = 0 + Math.random() * 300
    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight = 0;

    JELLY_FISH_LILA = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.JELLY_FISH_LILA)
        this.x = 600 + Math.random() * 1200;
        this.animate();
        this.animateSwimming(this.JELLY_FISH_LILA);
        this.speed = 0.15 + Math.random() * 0.7
    }
    animate() {
        this.moveUp()
    }
}