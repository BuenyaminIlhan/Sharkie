class BubbleFish extends MovableObject {

    height = 100;
    width = 100;
    x;
    y = 0 + Math.random() * 400
    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight  = 0;
    BUBBLE_FISH_IMG = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png'
    ]

    constructor(imagePath, x, y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png');
        this.loadImages(this.BUBBLE_FISH_IMG)
        this.x = 500 + Math.random() * 1100;
        this.animate();
        this.animateSwimming(this.BUBBLE_FISH_IMG);
        this.speed = 0.15 + Math.random() * 0.7
    }
    animate() {
        this.moveLeft()
    }
}