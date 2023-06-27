class Character extends MovableObject {

    width = 200
    height = 200
    y = 230
    SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',

    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.SWIMMING)
        this.animate()
    }
    animate() {

        setInterval(() => {
            let i  =this.currentImage % this.SWIMMING.length;   // let i = 0 % 6; => 0, Rest 0
            let path = this.SWIMMING[i];
            this.img = this.imageCahce[path];
            this.currentImage++;
        }, 150);

    }

}