/*
Programmed By: Bradley Haveman
Site Name: Side Scroller
File Name: constants.ts
Date: November 10th 2014
Decription: Hold the game information
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.WIN_STATE = 3;

    // Game Constants
    constants.WIN_SCORE = 2000;
    constants.ENEMY_NUM = 8;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#458B00";
    constants.SHIP_LIVES = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
