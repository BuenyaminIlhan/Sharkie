class Background extends MovableObject {


    constructor(imagePath) {
        super().loadImage(imagePath)
        this.width = 720
        this.height = 480
        this.x = 0
        this.y = 0
        //this.animate();
    }

    animate() {
        setInterval( () => {
            this.x -= 0.15
        },1000 / 120) // dies ergibt 60FPS
    }
}