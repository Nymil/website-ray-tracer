class Player {
    constructor() {
        this.x = _$canvas.height / 2;
        this.y = _$canvas.height / 2;
        this.radius = 7;
        this.angle = - Math.PI / 1.5;
        this.vel = 3;
    } 

    draw() {
        drawCircle('#FFFFFF', [this.x, this.y], this.radius);
        // draw direction line
        const directionLineLength = 20
        drawLine('#474747', [this.x, this.y, this.x + directionLineLength * Math.cos(this.angle), this.y + directionLineLength * Math.sin(this.angle)]);
    }

    move(direction) {
        switch (direction) {
            case 'forward':
                this.x += this.vel * Math.cos(this.angle);
                this.y += this.vel * Math.sin(this.angle);
                break;
            case 'backward':
                this.x -= this.vel * Math.cos(this.angle);
                this.y -= this.vel * Math.sin(this.angle);
                break;
            case 'left':
                this.x += this.vel * Math.cos(this.angle - Math.PI / 2);
                this.y += this.vel * Math.sin(this.angle - Math.PI / 2);
                break;
            case 'right':
                this.x += this.vel * Math.cos(this.angle + Math.PI / 2);
                this.y += this.vel * Math.sin(this.angle + Math.PI / 2);
                break;
        }
    }

    turn(direction) {
        if (direction === 'right') {
            this.angle += 6 / 180
        } else if (direction === 'left'){
            this.angle -= 6 / 180
        }
    }
}