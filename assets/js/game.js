class Game {
    constructor() {
        this.player = new Player();
        this.fps = 60;
        this.map = new Map();
        this.pressedKeys = [];
        this.addEventListeners();
    }
    
    clearScreen() {
        drawRect('black', [0, 0, _$canvas.width, _$canvas.height]);
    }

    draw() {
        this.clearScreen();
        this.player.draw();
    }

    update() {
        this.player.move('forward');
    }

    run() {
        // main game loop
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    addPressedKey(e) {
        // only add if it doesn't already exist
        if (!this.pressedKeys.includes(e.key)) this.pressedKeys.push(e.key);
    }
    removePressedKey(e) {
        this.pressedKeys = this.pressedKeys.filter(key => e.key !== key);
    }
    addEventListeners() {
        document.addEventListener('keydown', (e) => this.addPressedKey(e));
        document.addEventListener('keyup', (e) => this.removePressedKey(e));
    }
}
