class Poison extends MovableObject {

POISON_IMAGES = [
    'img/4. Marcadores/Posión/Animada/1.png',
    'img/4. Marcadores/Posión/Animada/2.png',
    'img/4. Marcadores/Posión/Animada/3.png',
    'img/4. Marcadores/Posión/Animada/4.png',
    'img/4. Marcadores/Posión/Animada/5.png',
    'img/4. Marcadores/Posión/Animada/6.png',
    'img/4. Marcadores/Posión/Animada/7.png',
    'img/4. Marcadores/Posión/Animada/8.png',
]

    x = 400;
    y = 250;
    width = 50
    height = 50
    speedY = 0
    constructor() {
        super();
        this.x = 400 + Math.random() * 1600;
        this.y = 10 + Math.random() * 500;
        this.width;
        this.height;
        this.speedY
        this.loadImage(this.POISON_IMAGES[0])
        this.loadImages(this.POISON_IMAGES)
    }

}