"use strict";

document.addEventListener('DOMContentLoaded', init);

let _game;

function init() {
    setUpCanvas();
    startGame();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 1600;
    _$canvas.height = 800;
    drawRect('black', [0, 0, 1600, 800]);
}

function startGame() {
    _game = new Game();
    _game.run();
}
