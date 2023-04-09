let _$canvas;
let _ctx;

// line is an array like [startX, startY, endX, endY]
function drawLine(color, line, width = 1) {
    _ctx.beginPath();
    _ctx.strokeStyle = color;
    _ctx.lineWidth = width;
    _ctx.moveTo(line[0], line[1]);
    _ctx.lineTo(line[2], line[3]);
    _ctx.stroke();
}