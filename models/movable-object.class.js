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
    speedY = 0;
    acceleration = 0.5;


    // wird für das springen benötigt
    applyGravity() {
        setInterval(() => {
            if (this.isAboveUp()) {                     // fällt nur bis zum meeres Grund
                this.y += this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 120)
    }

    isAboveUp() {
        return this.y < 550
    }

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

    // character.isColliding(greenFish)
    // Bessere Formel zur Kollisionsberechnung (Genauer)
    /*
    isColliding(obj) {
        return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
            (this.Y + this.offsetY + this.height) >= obj.Y &&
            (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }*/
    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x + mo.width && this.y < mo.y + mo.height;
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

        let i = this.currentImage % images.length;   // let i = 0 % 6; => 0, Rest 0
        let path = images[i];
        this.img = this.imageCahce[path];
        this.currentImage++;
    }
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveBack() {
        this.x -= this.speed;
        this.otherDirection = true;
    }
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed
        }, 1000 / 120) // dies ergibt 120FPS
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed
        }, 1000 / 120) // dies ergibt 120FPS
    }

    moveFishUP() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;

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