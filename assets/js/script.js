"use strict";

document.addEventListener('DOMContentLoaded', init);

let _$canvas;
let _ctx;

function init() {
    setUpCanvas();
}

function setUpCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 1600;
    _$canvas.height = 800;
    // _ctx.beginPath();
    _ctx.fillRect(0, 0, 1600, 800);
}