let canvas;
let world;
let KEYBOARD = new Keyboard()

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, KEYBOARD)
}

window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        KEYBOARD.UP = true;
    }
    if (e.key == 'ArrowDown') {
        KEYBOARD.DOWN = true;
    }
    if (e.key == 'ArrowRight') {
        KEYBOARD.RIGHT = true;
    }
    if (e.key == 'ArrowLeft') {
        KEYBOARD.LEFT = true;
    }
    if (e.key == 'Space') {
        KEYBOARD.SPACE = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        KEYBOARD.UP = false;
    }
    if (e.key == 'ArrowDown') {
        KEYBOARD.DOWN = false;
    }
    if (e.key == 'ArrowRight') {
        KEYBOARD.RIGHT = false;
    }
    if (e.key == 'ArrowLeft') {
        KEYBOARD.LEFT = false;
    }
    if (e.key == 'Space') {
        KEYBOARD.SPACE = false;
    }
});