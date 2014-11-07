/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/powerup.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private powerUp: objects.PowerUp;
        private enemies = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, powerUp: objects.PowerUp, enemies, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.powerUp = powerUp;
            this.enemies = enemies;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between ship and any enemy object
        private shipAndEnemy(enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = enemy.image.x;
            p2.y = enemy.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (enemy.height / 2))) {
                createjs.Sound.play("explosionFX");
                this.scoreboard.lives -= 1;
                enemy.reset();
            }
        }

        // check collision between shipand power up
        private shipAndPowerUp() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = this.powerUp.image.x;
            p2.y = this.powerUp.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.powerUp.height / 2))) {
                createjs.Sound.play("powerUpFX");
                this.scoreboard.score += 100;
                this.powerUp.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.shipAndEnemy(this.enemies[count]);
            }
            this.shipAndPowerUp();
        }
    }
} 