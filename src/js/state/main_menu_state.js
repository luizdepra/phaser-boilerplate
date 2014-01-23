var MainMenuState = function(game) {
    this.game = game;
};

MainMenuState.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#0080C0';
    },

    create: function() {

    }
};

module.exports = MainMenuState;
