class MovableObject {
    x = 10;
    y = 300;
    img;
    width = 150;
    height = 100;
    imageCahce = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png','img/image2.png', ... ]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();                     // ein Image Objekt wird erstellt
            img.src = path                             // Bild wird zum Objekt hinzugefügt
            this.imageCahce[path] = img;              // wird zum JSON hinzugefügt
        });
    }
    playAnimation(images) {
        this.x += this.speed
        let i = this.currentImage % images.length;   // let i = 0 % 6; => 0, Rest 0
        let path = images[i];
        this.img = this.imageCahce[path];
        this.currentImage++;
    }
    moveRight() {
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed
        }, 1000 / 120) // dies ergibt 60FPS
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed
        }, 1000 / 120) // dies ergibt 120FPS
    }

    moveDown() {

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