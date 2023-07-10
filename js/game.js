let canvas;
let world;
let KEYBOARD = new Keyboard();
let backgroundSound = new Audio('audio/Background_sound.mp3');

function init() {
    initLevel();
    backgroundSound.play();
    initLevel();
    backgroundSound.play()
    canvas = document.getElementById('canvas');
    world = new World(canvas, KEYBOARD);
    document.getElementById('start-game').style.display = 'none'
    closeInstructions()
    document.getElementById('sound-btn').style.opacity = '1';
    let soundContainer = document.getElementById('sound-container');
    soundContainer.innerHTML = '';
    soundContainer.innerHTML = '<img onclick="soundOff()" class="sound-btn" src="img/sound.png" alt="">';
}

function soundOff() {
    world.hurt_sound.muted = true;
    world.gameOverSound.muted = true;
    world.coin_sound.muted = true;
    world.hurtSound.muted = true;
    world.audioContext.muted = true;
    world.attackSound.muted = true;
    world.character.swimming_sound.muted = true;
    backgroundSound.muted = true;
    let soundContainer = document.getElementById('sound-container');
    soundContainer.innerHTML = '';
    soundContainer.innerHTML = '<img class="sound-btn" onclick="soundOn()" src="img/no-sound.png">';
}
function soundOn() {
    world.hurt_sound.muted = false;
    world.gameOverSound.muted = false;
    world.coin_sound.muted = false;
    world.hurtSound.muted = false;
    world.audioContext.muted = false;
    world.attackSound.muted = false;
    world.character.swimming_sound.muted = false;
    backgroundSound.muted = false;
    let soundContainer = document.getElementById('sound-container');
    soundContainer.innerHTML = '';
    soundContainer.innerHTML = '<img onclick="soundOff()" class="sound-btn" src="img/sound.png" alt="">';
}

function showInstructions() {
    document.getElementById('instructions').classList.remove('d-none')
}

function closeInstructions() {
    document.getElementById('instructions').classList.add('d-none')
}

function showInstructions() {
    document.getElementById('instructions').classList.remove('d-none')
}
function closeInstructions() {
    document.getElementById('instructions').classList.add('d-none')
}

function fullscreen(elementId) {
    let elem = document.getElementById(elementId);
    let hud = document.getElementById('hud');

    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        elem.style.width = '100vw'
        elem.style.height = '100vh'
        hud.style.display = 'flex'

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
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