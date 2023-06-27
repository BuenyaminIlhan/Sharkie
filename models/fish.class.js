class Fish extends MovableObject {

    x = 200 + Math.random() * 500
    y = 0 + Math.random() * 400
    width = 80

    SWIMMING_GREEN_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    SWIMMING_RED_FISH = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',


    ];
    constructor(imagePath, x, y) {
        super(x, y).loadImage(imagePath)
        this.loadImages(this.SWIMMING_GREEN_FISH)
        this.loadImages(this.SWIMMING_RED_FISH)
        this.animate();
        this.animateSwimming(this.SWIMMING_RED_FISH);
        this.animateSwimming(this.SWIMMING_GREEN_FISH);
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15
        }, 1000 / 120) // dies ergibt 60FPS
    }
    animateSwimming(imageArray) {
        setInterval(() => {
            let i = this.currentImage % imageArray.length;   // let i = 0 % 6; => 0, Rest 0
            let path = imageArray[i];
            this.img = this.imageCahce[path];
            this.currentImage++;
        }, 150);
    }
}