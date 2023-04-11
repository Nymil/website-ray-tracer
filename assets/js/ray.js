class Ray {
    constructor(player, angle) {
        this.startX = player.x;
        this.startY = player.y;
        this.endX = null;
        this.endY = null;
        this.angle = angle;
    }

    draw() {
        if (this.endX === null || this.endY === null) return;
        drawLine('white', [this.startX, this.startY, this.endX, this.endY]);
    }

    cast() {
        
    }
}