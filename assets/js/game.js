class Game {
    constructor() {
        this.player = new Player();
        this.fps = 60;
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
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }
}
