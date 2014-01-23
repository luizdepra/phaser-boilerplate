'use strict';

// Load modules
var Constant = require('./constant');
var Phaser = require('./lib/phaser');
var PreloaderState = require('./state/preloader_state');
var MainMenuState = require('./state/main_menu_state');

// Init Phaser
function init() {
    var game = new Phaser.Game(
        Constant.SCREEN_WIDTH,
        Constant.SCREEN_HEIGHT,
        Phaser.AUTO,
        Constant.STAGE_NAME
    );

    var preloader = new PreloaderState(game);
    var mainmenu = new MainMenuState(game);

    game.state.add('PreloaderState', preloader);
    game.state.add('MainMenuState', mainmenu);

    game.state.start('PreloaderState');
}

window.onload = function() {
    init();
}
