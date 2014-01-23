'use strict';

var Constant = require('../constant');
var $ = require('../lib/jquery');

var PreloaderState = function(game) {
    this.game = game;
};

PreloaderState.prototype = {

    preload: function() {
        this.game.stage.backgroundColor = '#000000';

        $('#' + Constant.STAGE_NAME).append(' \
            <div class="loading-container"> \
                <div class="loading-text"> \
                    LOADING... \
                </div> \
                <div class="loadingbar-container"> \
                    <div class="loadingbar"> \
                    </div> \
                </div> \
            </div>'
        );

        this.load.text('GameConstant', './res/game_constant.json');

        this.load.onFileComplete.add(this.onFileLoaded, this);

        console.log(this.load.progress);
    },

    create: function() {
        //$('.loading-container').remove();

        //this.game.state.start('MainMenuState');
    },

    destroy: function() {

    },

    onFileLoaded: function (progress) {
        var barSize = 200;

        $('.loading-bar').width(barSize * progress / 100);

        console.log(progress);
    }
};

module.exports = PreloaderState;
