/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/powerup.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(ship, powerUp, enemies, scoreboard) {
            this.enemies = [];
            this.ship = ship;
            this.powerUp = powerUp;
            this.enemies = enemies;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between ship and any enemy object
        Collision.prototype.shipAndEnemy = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.x;
            p1.y = this.ship.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (enemy.height / 2))) {
                createjs.Sound.play("explosionFX");
                this.scoreboard.lives -= 1;
                enemy.reset();
            }
        };

        // check collision between shipand power up
        Collision.prototype.shipAndPowerUp = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.x;
            p1.y = this.ship.y;
            p2.x = this.powerUp.x;
            p2.y = this.powerUp.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.powerUp.height / 2))) {
                createjs.Sound.play("powerUpFX");
                this.scoreboard.score += 100;
                this.powerUp.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.shipAndEnemy(this.enemies[count]);
            }
            this.shipAndPowerUp();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
