class Character extends MovableObject {

    width = 200
    height = 200
    y = 230
    speed = 2
    SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',

    ];
    currentImage = 0;
    world;
    swimming_sound = new Audio('audio/fish_swimming.mp3')
    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.SWIMMING)
        this.animate()
    }
    animate() {

        setInterval(() => {
            this.swimming_sound.pause()
            if (this.world.KEYBOARD.RIGHT && this.x < this.world.level.level_end_X) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play()

            }
            if (this.world.KEYBOARD.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play()
            }
            if (this.world.KEYBOARD.UP) {
                this.y -= this.speed;
                this.swimming_sound.play()
            }
            if (this.world.KEYBOARD.DOWN) {
                this.y += this.speed;
                this.swimming_sound.play()
            }
            this.world.camera_x = -this.x + 100
        }, 1000 / 120)      //entspricht 120FPS
        setInterval(() => {
            if (this.world.KEYBOARD.RIGHT || this.world.KEYBOARD.LEFT || this.world.KEYBOARD.UP || this.world.KEYBOARD.DOWN) {
                this.playAnimation(this.SWIMMING)
            }
        }, 80);

    }

}