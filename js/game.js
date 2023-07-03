let canvas;
let world;
let KEYBOARD = new Keyboard()

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, KEYBOARD)
}

function fullscreen() {
    canvas.requestFullscreen()
}

window.addEventListener('keydown', (e) => {
    if (e.code == 'ArrowUp') {
        KEYBOARD.UP = true;
    }
    if (e.code == 'ArrowDown') {
        KEYBOARD.DOWN = true;
    }
    if (e.code == 'ArrowRight') {
        KEYBOARD.RIGHT = true;
    }
    if (e.code == 'ArrowLeft') {
        KEYBOARD.LEFT = true;
    }
    if (e.code == 'Space') {
        KEYBOARD.SPACE = true;
    }
    if (e.code == 'KeyD') {
        KEYBOARD.D = true
    }
    if (e.code == 'KeyF') {
        KEYBOARD.F = true
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code == 'ArrowUp') {
        KEYBOARD.UP = false;
    }
    if (e.code == 'ArrowDown') {
        KEYBOARD.DOWN = false;
    }
    if (e.code == 'ArrowRight') {
        KEYBOARD.RIGHT = false;
    }
    if (e.code == 'ArrowLeft') {
        KEYBOARD.LEFT = false;
    }
    if (e.code == 'Space') {
        KEYBOARD.SPACE = false;
    }
    if (e.code == 'KeyD') {
        KEYBOARD.D = false
    }
    if (e.code == 'KeyF') {
        KEYBOARD.F = false
    }
});