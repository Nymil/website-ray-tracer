"use strict";

document.addEventListener('DOMContentLoaded', init);

let player;

function init() {
    setUpCanvas();
    player = new Player();
    slowlyMoveDirection();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 1600;
    _$canvas.height = 800;
    drawRect('black', [0, 0, 1600, 800]);
}

function slowlyMoveDirection() {
    drawRect('black', [0, 0, 1600, 800]);
    player.move('forward');
    player.draw();
    setTimeout(slowlyMoveDirection, 0.5);
}
