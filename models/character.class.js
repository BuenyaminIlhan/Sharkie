class Character extends MovableObject {

    width = 250;
    height = 200;
    y = 200;
    x = 20;
    speed = 2;
    offsetTop = 130;
    offsetBottom = 100;
    offsetLeft = 90;
    offsetRight = 50;
    interval;
    lastAction = 0;
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
    ];

    SLAP_IMAGES = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    SLEEP_IMAGES = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    SLEEP_IMAGES = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ]
    currentImage = 0;
    world;
    swimming_sound = new Audio('audio/fish_swimming.mp3');
    constructor() {
        super().loadImage(this.IDLE[0]);
        this.loadImages(this.IDLE);
        this.loadImages(this.SWIMMING);
        this.loadImages(this.DEAD);
        this.loadImages(this.HURT);
        this.loadImages(this.SLAP_IMAGES);
        this.loadImages(this.SLEEP_IMAGES);
        this.loadImages(this.HURT);
        this.loadImages(this.SLAP_IMAGES);
        this.loadImages(this.SLEEP_IMAGES);
        this.animate();
        this.finSlap();
        this.mobileButtons();
    }

    mobileButtons() {
        document.getElementById('right-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.RIGHT = true
        })

        document.getElementById('right-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.RIGHT = false
        })

        document.getElementById('left-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.LEFT = true
        })

        document.getElementById('left-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.LEFT = false
        })

        document.getElementById('up-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.UP = true
        })

        document.getElementById('up-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.UP = false
        })

        document.getElementById('down-btn').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.DOWN = true
        })

        document.getElementById('down-btn').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.DOWN = false
        })

        document.getElementById('bubble-attack').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.SPACE = true
        })

        document.getElementById('bubble-attack').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.world.KEYBOARD.SPACE = false
        })
    }

    finSlap() {
        setInterval(() => {
            if (this.world.KEYBOARD.D) {
                this.playAnimation(this.SLAP_IMAGES);
            }
        }, 80);
    }
    

    animate() {
        setInterval(() => {
            if (this.x == 1620) {
                level1.enemies[0].hadFirstContact = true
            }
            this.swimming_sound.pause();
            if (this.world.KEYBOARD.RIGHT && this.x < this.world.level.level_end_X) {
                this.moveRight();
                this.swimming_sound.play();
                this.lastAction = new Date().getTime();
            }
            if (this.world.KEYBOARD.LEFT && this.x > 0) {
                this.moveBack();
                this.swimming_sound.play();
                this.lastAction = new Date().getTime();
            }
            if (this.world.KEYBOARD.UP) {
                this.moveFishUP();
                this.swimming_sound.play();
                this.lastAction = new Date().getTime();
            }
            if (this.world.KEYBOARD.DOWN) {
                this.moveDown();
                this.swimming_sound.play();
                this.lastAction = new Date().getTime();
            }
            this.world.camera_x = -this.x + 100
        }, 1000 / 120)      //entspricht 120FPS

        let interval = setInterval(() => {

            if (this.energy === 0) {
                this.playAnimation(this.DEAD, interval)
            }
            else if (this.isHurt()) {
                this.playAnimation(this.HURT)
            }
            else if (this.world.KEYBOARD.RIGHT || this.world.KEYBOARD.LEFT || this.world.KEYBOARD.UP || this.world.KEYBOARD.DOWN) {
                this.playAnimation(this.SWIMMING)
            }
            else if (new Date().getTime() - this.lastAction > 5000) {
                this.playAnimation(this.SLEEP_IMAGES)
            }
            else {
                this.playAnimation(this.IDLE)
            }
        }, 80);
    }
}