class EndBoss extends MovableObject {

    width = 500
    height = 600
    y = -150

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
constructor() {
    super().loadImage(this.IMAGE_SWIMMING[0]);
    this.loadImages(this.IMAGE_SWIMMING)
    this.x = 680 * 3 ;
    this.animate();
    
}

animate() {
    setInterval(() => {
        this.playAnimation(this.IMAGE_SWIMMING)
    }, 80);
}

}