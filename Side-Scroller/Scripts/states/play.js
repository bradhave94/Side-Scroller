/// <reference path="../objects/button.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/powerup.ts" />
/// <reference path="../objects/oneup.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        background.update();
        powerUp.update();
        oneUp.update();
        ship.update();

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            ship.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);
        powerUp = new objects.PowerUp(stage, game);
        oneUp = new objects.OneUp(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count] = new objects.Enemy(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(ship, powerUp, oneUp, enemies, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
