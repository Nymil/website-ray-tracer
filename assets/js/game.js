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

    addPressedKey(key) {
        // only add if it doesn't already exist
        if (!this.pressedKeys.includes(key)) this.pressedKeys.push(key);
    }
    removePressedKey(key) {
        this.pressedKeys = this.pressedKeys.filter(arrayKey => key !== arrayKey);
    }
    addEventListeners() {
        document.addEventListener('keydown', (e) => this.addPressedKey(e.key));
        document.addEventListener('keyup', (e) => this.removePressedKey(e.key));
    }
}
