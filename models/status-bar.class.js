class StatusBar extends DrawableObject {


    LIFE = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
    ];


    percantage = 100;

    constructor() {
        super();
       this.loadImages(this.LIFE)
        this.x = 0;
        this.y = -15;
        this.width = 200;
        this.height = 60
        this.setPrecentage(100)
    }

    setPrecentage(percantage) {
        this.percantage = percantage
        let path = this.LIFE[this.resolveImageIndex()];
        this.img = this.imageCahce[path]
    }

    resolveImageIndex() {
        if (this.percantage == 100) {
            return 5;
        } else if (this.percantage > 80) {
            return 4;
        } else if (this.percantage > 60) {
            return 3;
        } else if (this.percantage > 40) {
            return 2;
        } else if (this.percantage > 20) {
            return 1
        } else {
            return 0;
        }
    }
}