class Game {
    constructor() {
        this.player = new Player();
        this.fps = 60;
    }

    run() {
        setInterval(() => {
            drawRect('black', [0, 0, 1600, 800]);
            this.player.move('forward');
            this.player.draw();
        }, 1000 / this.fps);
    }
}
