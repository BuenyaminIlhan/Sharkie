class World {
    level = level1
    enemies = level1.enemies;
    character = new Character();
    background = level1.background;
    canvas;
    ctx;
    KEYBOARD;
    camera_x = 0;
    statusBar = new StatusBar()
    throwableObject = [];
    constructor(canvas, KEYBOARD) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.KEYBOARD = KEYBOARD
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this
    }

    run() {

        setInterval(() => {

            this.checkCollisions();
            this.checkTrhowObject();
        }, 200);
    }
    attackSound = new Audio('audio/attack_sound.mp3');
    checkTrhowObject() {
        this.attackSound.pause();
        if (this.KEYBOARD.SPACE) {
            let bottle = new ThrowableObject(this.character.x +120, this.character.y +110);
            this.throwableObject.push(bottle)
            this.attackSound.play();
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPrecentage(this.character.energy)
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        // ----------- Space for fix objects------------
        this.ctx.translate(-this.camera_x, 0); // Back
        this.addToMap(this.statusBar)
        this.ctx.translate(this.camera_x, 0); // Forward

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);


        // Draw() wird immer wieder aufgerufen
        let self = this
        requestAnimationFrame(function () {
            self.draw()
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipimage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx)


        if (mo.otherDirection) {
            this.flipimageBack(mo);
        }
    }
    flipimage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1
    }

    flipimageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}