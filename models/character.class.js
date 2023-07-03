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

    IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'

    ];

    DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ]

    currentImage = 0;
    world;
    swimming_sound = new Audio('audio/fish_swimming.mp3')
    constructor() {
        super().loadImage(this.IDLE[0]);
        this.loadImages(this.IDLE);
        this.loadImages(this.SWIMMING);
        this.loadImages(this.DEAD);
        this.loadImages(this.HURT)
        this.animate();


    }

    animateIdle() {
        setInterval(() => {

        }, 2000 / 120)
    }
    animate() {
        //this.swimming_sound.play()
        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.KEYBOARD.RIGHT && this.x < this.world.level.level_end_X) {
                this.moveRight();
                this.swimming_sound.play();
            }
            if (this.world.KEYBOARD.LEFT && this.x > 0) {
                this.moveBack();
                this.swimming_sound.play();
            }
            if (this.world.KEYBOARD.UP) {
                this.moveFishUP();
                this.swimming_sound.play();
            }
            if (this.world.KEYBOARD.DOWN) {
                this.moveDown();
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x + 100
        }, 1000 / 120)      //entspricht 120FPS

        setInterval(() => {

            if (this.energy === 0) {
                this.playAnimation(this.DEAD)
            }
            else if (this.isHurt()) {
                this.playAnimation(this.HURT)
            }

            else if (this.world.KEYBOARD.RIGHT || this.world.KEYBOARD.LEFT || this.world.KEYBOARD.UP || this.world.KEYBOARD.DOWN) {
                this.playAnimation(this.SWIMMING)
            }
            else {
                this.playAnimation(this.IDLE)
            }

        }, 80);

    }

}