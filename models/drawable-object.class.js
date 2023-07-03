class DrawableObject {

    img;
    imageCahce = {};
    currentImage = 0;
    x = 10;
    y = 300;
    width = 150;
    height = 100;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character ||
            this instanceof Fish ||
            this instanceof BubbleFish ||
            this instanceof GreenFish ||
            this instanceof GreenFish ||
            this instanceof RedFish ||
            this instanceof TransitonGreenFish ||
            this instanceof JellyFishLila ||
            this instanceof EndBoss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();                     // ein Image Objekt wird erstellt
            img.src = path                             // Bild wird zum Objekt hinzugefügt
            this.imageCahce[path] = img;              // wird zum JSON hinzugefügt
        });
    }

}