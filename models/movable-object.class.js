class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    endBossEnergy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            this.x += this.speedY;
        }, 1000 / 120)
    }

    isColliding(mo) {
        return this.x + this.offsetRight + this.width - this.offsetBottom > mo.x &&
            this.y + 10 + this.offsetLeft + this.height - 20 - this.offsetTop > mo.y &&
            this.x + this.offsetRight < mo.x + mo.width &&
            this.y + this.offsetBottom < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    endBossHit() {
        this.endBossEnergy -= 20
        if (this.endBossEnergy < 0) {
            this.endBossEnergy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
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
        if (images[11] == 'img/1.Sharkie/6.dead/1.Poisoned/12.png' || images[4] == 'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png') {
            world.endScreen();
        }
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
        }, 1000 / 120)
    }

    attackEndBoss() {
        setInterval(() => {
            this.x -= 0.45
        }, 1000 / 120)
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed
        }, 1000 / 120)
    }

    moveFishUP() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    animateSwimming(imageArray) {
        setInterval(() => {
            let i = this.currentImage % imageArray.length;
            let path = imageArray[i];
            this.img = this.imageCahce[path];
            this.currentImage++;
        }, 150);
    }
}