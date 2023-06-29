class Fish extends MovableObject {

    x = 200 + Math.random() * 500
    y = 0 + Math.random() * 400
    width = 80



    constructor(greet) {
        super();
    }
    animate() {
        this.moveLeft()
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