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

// rect is array like [startX, startY, width, height]
function drawRect(color, rect, width = null) {
    _ctx.beginPath();
    width === null ? _ctx.fillStyle = color : _ctx.strokeStyle = color;
    if (width !== null) _ctx.lineWidth = width;
    width === null ? _ctx.fillRect(rect[0], rect[1], rect[2], rect[3]) : _ctx.rect(rect[0], rect[1], rect[2], rect[3]);
    _ctx.stroke();
}