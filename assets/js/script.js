"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    setUpCanvas();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 1600;
    _$canvas.height = 800;
    drawRect('black', [0, 0, 1600, 800]);
    drawLine('blue', [0, 0, 1600, 800]);
    drawRect('blue', [20, 20, 600, 130]);
    drawRect('red', [20, 150, 600, 130], 20);
    drawRect('blue', [500, 600, 600, 130], 6);
    drawCircle('blue', [1000, 400], 60);
}
