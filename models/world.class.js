class World {

    level = level1;
    enemies = level1.enemies;
    character = new Character();
    endboss = new EndBoss();
    background = level1.background;
    coins = level1.coins;
    canvas;
    ctx;
    KEYBOARD;
    camera_x = 0;
    collectedCoins = 0;
    collectedPoison = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    coins = [];
    poisons = [];
    bubble;
    coin_sound;
    hurtSound;
    audioContext;
    throwableObject = [];
    attackSound = new Audio('audio/attack_sound.mp3');
    gameOverSound = new Audio('audio/game_over.mp3');
    hurt_sound = new Audio('audio/hurt_sound_2.mp3');

    constructor(canvas, KEYBOARD) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.KEYBOARD = KEYBOARD;
        this.draw();
        this.setWorld();
        this.run();
        this.coinsLoop();
        this.poisonsLoop();
        this.audioContext = new AudioContext();
        this.coin_sound = 'audio/coin_sound.mp3';
        this.hurtSound = 'audio/character_hurt.mp3';
    }

    coinsLoop() {
        for (let i = 0; i < 32; i++) {
            this.coins.push(new Coins());
        }
    }

    poisonsLoop() {
        for (let i = 0; i < 32; i++) {
            this.poisons.push(new Poison());
        }
    }

    setWorld() {
        this.character.world = this
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkTrhowObject();
            this.checkCollisionsCoins();
            this.checkCollisionsPoison();
            this.checkCollisionsBubblesWithEnemies();
        }, 100);
    }

    checkTrhowObject() {
        this.attackSound.pause();
        if (this.KEYBOARD.SPACE && this.collectedPoison > 0) {
            this.bubble = new ThrowableObject(this.character.x + 120, this.character.y + 110);
            this.throwableObject.push(this.bubble);
            this.collectedPoison--;
            this.attackSound.play();
        }
    }

    checkCollisionsCoins() {
        this.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins++;
                this.coins.splice(index, 1);
                this.playCoinSound();
            }
        });
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if ((this.character.isColliding(enemy) || this.character.isColliding(this.endboss))) {
                this.character.hit();
                this.statusBar.setPrecentage(this.character.energy);
                this.playHurtSound();
            }
        });
    }

    playCoinSound() {
        const coinSoundSource = this.audioContext.createBufferSource();
        fetch(this.coin_sound)
            .then((response) => response.arrayBuffer())
            .then((buffer) => this.audioContext.decodeAudioData(buffer))
            .then((audioBuffer) => {
                coinSoundSource.buffer = audioBuffer;
                coinSoundSource.connect(this.audioContext.destination);
                coinSoundSource.start();
            });
    }

    playHurtSound() {
        const hurtSoundSource = this.audioContext.createBufferSource();
        fetch(this.hurtSound)
            .then((response) => response.arrayBuffer())
            .then((buffer) => this.audioContext.decodeAudioData(buffer))
            .then((audioBuffer) => {
                hurtSoundSource.buffer = audioBuffer;
                hurtSoundSource.connect(this.audioContext.destination);
                hurtSoundSource.start();
            });
    }

    checkCollisionsBubblesWithEnemies() {
        this.enemies.forEach((enemy, enemyIndex) => {
            this.throwableObject.forEach((bubble, bubbleIndex) => {
                if (enemy.isColliding(bubble)) {
                    this.enemies.splice(enemyIndex, 1);
                    this.throwableObject.splice(bubbleIndex, 1);
                }
                if (this.endboss.isColliding(bubble)) {
                    this.throwableObject.splice(bubbleIndex, 1);
                    this.endboss.endBossHit();
                }
            });
        });
    }

    checkCollisionsPoison() {
        this.poisons.forEach((poison, index) => {
            if (this.character.isColliding(poison)) {
                this.collectedPoison++
                this.poisons.splice(index, 1)
            }
        })
    }

    endScreen() {
        backgroundSound.pause()
        this.gameOverSound.pause();
        setTimeout(() => {
            let endScreen = document.getElementById('start-game');
            let gameOver = document.getElementById('game-over');
            endScreen.style.display = 'flex';
            endScreen.style.background = '#000000b0';
            gameOver.style.fontSize = '130px'
            gameOver.innerHTML = '<img src="img/6.Botones/Tittles/Game Over/Recurso 12.png">';
            gameOver.style.color = 'white'
            this.gameOverSound.play();
            this.gameOverSound.volume =0.5
            for (let i = 1; i < 9999; i++) window.clearInterval(i);
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.coins)
        this.addObjectsToMap(this.poisons)

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);

        this.ctx.font = 'bold 26px Shadows Into Light';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.collectedCoins.toString(), 260, 32);
        this.ctx.fillText(this.collectedPoison.toString(), 345, 32);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);

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
        if (mo.otherDirection) {
            this.flipimage(mo);
        }
        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipimageBack(mo);
        }
    }
    
    flipimage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1
    }

    flipimageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}