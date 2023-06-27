class MovableObject {
    x = 10;
    y = 300;
    img;
    width = 150;
    height = 100;
    imageCahce = {};
    currentImage = 0;


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
    moveRight() {
    }
    moveLeft() {

    }

    moveUp() {

    }

    moveDown() {

    }
}