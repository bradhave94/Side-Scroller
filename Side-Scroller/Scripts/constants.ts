/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: constants.ts
    Date: November 10th 2014
    Decription: Hold the game information
*/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var WIN_STATE: number = 3;

    // Game Constants
    export var WIN_SCORE: number = 2000;
    export var ENEMY_NUM: number = 8;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#458B00";
    export var SHIP_LIVES = 3;
}