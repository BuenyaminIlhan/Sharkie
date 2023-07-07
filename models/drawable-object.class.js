class DrawableObject {

    img;
    imageCahce = {};
    currentImage = 0;
    x;
    y;
    width;
    height;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    drawFrame(ctx) {
        if (this instanceof Character ||
            this instanceof GreenFish
        ) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.rect(this.x + this.offsetRight,
                this.y + this.offsetLeft,
                this.width - this.offsetBottom,
                this.height - this.offsetTop);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path
            this.imageCahce[path] = img;
        });
    }
}