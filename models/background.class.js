class Background extends MovableObject {
    x = 0;
    y = 0;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath)
        this.width = 720
        this.height = 560
        this.x = x
        this.y = y        //this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15
        }, 1000 / 120) // dies ergibt 120FPS
    }
}