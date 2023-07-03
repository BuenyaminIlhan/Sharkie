class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    


    // wird für das springen benötigt
    applyGravity() {
        setInterval(() => {
                this.x += this.speedY;
        }, 1000 / 120)
    }



    isColliding(mo) {
        return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x + mo.width && this.y < mo.y + mo.height;
    }
    hit() {
        this.energy -= 5
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;  // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }
    /**
     * 
     * @param {Array} arr - ['img/image1.png','img/image2.png', ... ]
     */

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