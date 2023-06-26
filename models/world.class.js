class World {
    character = new Character();
    fish = new Fish();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
    ];
    background = [
        new Background('img/3. Background/Legacy/Layers/5. Water/L3.png')

    ]
    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap (this.background);


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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)

    }
}
