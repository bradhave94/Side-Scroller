
/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: game.ts
    Date: November 10th 2014
    Decription: This file holds the main logic of the game. 
*/

/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/powerup.ts" />
/// <reference path="objects/oneup.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/win.ts" />

var stage: createjs.Stage;
var game: createjs.Container;
var soundtrack: createjs.SoundInstance;

var background: objects.Background;
var ship: objects.Ship;
var powerUp: objects.PowerUp;
var oneUp: objects.OneUp;

var enemies = []; // Enemies array;
var scoreboard: objects.Scoreboard;

var collision: managers.Collision;

var tryAgain: objects.Button;
var playButton: objects.Button;

var currentState: number;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    this.soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);

}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event): void {
    currentStateFunction();
    stage.update();
}

function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            this.soundtrack.stop();
            states.gameOver();
            break;

        case constants.WIN_STATE:
            currentStateFunction = states.winState;
            // instantiate game over screen
            states.win();
            break;


    }
}





