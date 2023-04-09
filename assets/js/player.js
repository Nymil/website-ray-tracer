class Player {
    constructor() {
        this.x = _$canvas.height / 2;
        this.y = _$canvas.height / 2;
        this.radius = 7;
        this.angle = - Math.PI / 2;
        this.vel = 2;
    } 

    draw() {
        drawCircle('#FFFFFF', [this.x, this.y], this.radius);
        // draw direction line
        const directionLineLength = 20
        drawLine('#474747', [this.x, this.y, this.x + directionLineLength * Math.cos(this.angle), this.y + directionLineLength * Math.sin(this.angle)]);
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.y -= this.vel;
                break;
            case 'down':
                this.y += this.vel;
                break;
            case 'left':
                this.x -= this.vel;
                break;
            case 'right':
                this.x += this.vel;
                break;
        }
    }
}