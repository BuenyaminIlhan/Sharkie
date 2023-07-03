class EndBoss extends MovableObject {

    width = 500
    height = 600
    y = -150

    IMAGES_SPAWNING = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ]

    IMAGE_SWIMMING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'

    ];
    hadFirstContact = false;
    constructor() {
        super().loadImage(this.IMAGE_SWIMMING[0]);
        this.loadImages(this.IMAGE_SWIMMING)
        this.loadImages(this.IMAGES_SPAWNING)
        this.x = 680 * 3;
        this.animate();

    }

    animate() {
        
        let i = 0
        setInterval(() => {
            console.log(this.isDead)
            if (i < 10) {
                this.playAnimation(this.IMAGES_SPAWNING)
            } else {
                this.playAnimation(this.IMAGE_SWIMMING)
            }
            i++;

            if (this.x > 1450 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 80);
    }

}