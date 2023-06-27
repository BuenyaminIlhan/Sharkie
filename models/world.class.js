class World {
    character = new Character();
    enemies = [
        new Fish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'),
        new Fish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png'),
        new Fish('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png'),

    ];
    background = [
        new Background('img/3. Background/Layers/5. Water/L.png'),              //Wasser
        new Background('img/3. Background/Legacy/Layers/4.Fondo 2/L3.png'),     //hinteres
        new Background('img/3. Background/Layers/3.Fondo 1/L.png'),             //vorderes
        new Background('img/3. Background/Legacy/Layers/2. Floor/L3.png'),      //Meeresgrund
        new Background('img/3. Background/Layers/1. Light/2.png')               //Sonneneinstrahlung
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

        this.addObjectsToMap(this.background);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);


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