class Game {
    constructor() {
        this.player = new Player();
        this.fps = 60;
        this.map = new Map();
        console.log(this.map.board);
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
}
