﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/powerup.ts" />
/// <reference path="../objects/oneup.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        background.update();
        ship.update();
    }
    states.menuState = menuState;

    function menu() {
        var intructionsOne;
        var intructionsTwo;
        var intructionsThree;
        var intructionsFour;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        intructionsOne = new objects.Label(stage.canvas.width / 2, 60, "WELCOME! This is a basic game.");
        game.addChild(intructionsOne);

        intructionsTwo = new objects.Label(stage.canvas.width / 2, 500, "Aviod the bad guys");
        game.addChild(intructionsTwo);

        intructionsThree = new objects.Label(stage.canvas.width / 2, 575, "While trying to collect the power ups!");
        game.addChild(intructionsThree);

        intructionsFour = new objects.Label(stage.canvas.width / 2, 650, "Get to 2000 to win! GOODLUCK");
        game.addChild(intructionsFour);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
