class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50
        this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.throw();
    }

    throw() {
        setInterval(() => {
            this.x += 8
        }, 15)
    }
}