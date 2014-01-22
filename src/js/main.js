'use strict';

// Load modules
var Phaser = require('./lib/phaser.js');

// Init Phaser
function init() {
    var game = new Phaser.Game(640, 480, Phaser.AUTO, 'stage', {
        preload: preload,
        create: create,
        update: update
    });
}

function preload() {

}

function create() {

}

function update() {

}

window.onload = function() {
    init();
}
