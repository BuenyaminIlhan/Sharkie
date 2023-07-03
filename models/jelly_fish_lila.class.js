class JellyFishLila extends MovableObject {
    
    x = 200 + Math.random() * 500
    y = 0 + Math.random() * 300

    JELLY_FISH_LILA = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.JELLY_FISH_LILA)
        this.x = 500 + Math.random() * 1200;
        this.animate();
        this.animateSwimming(this.JELLY_FISH_LILA);
        this.speed = 0.15 + Math.random() * 0.7
    }
    animate() {
        this.moveUp()
    }
}