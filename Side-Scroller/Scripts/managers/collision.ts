﻿/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: collision.ts
    Date: November 10th 2014
    Decription: This file implement the collision logic
*/

/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/powerup.ts" />
/// <reference path="../objects/oneup.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private powerUp: objects.PowerUp;
        private oneUp: objects.OneUp;
        private enemies = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, powerUp: objects.PowerUp, oneUp: objects.OneUp, enemies, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.powerUp = powerUp;
            this.oneUp = oneUp;
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
            p1.x = this.ship.x;
            p1.y = this.ship.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
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
            p1.x = this.ship.x;
            p1.y = this.ship.y;
            p2.x = this.powerUp.x;
            p2.y = this.powerUp.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.powerUp.height / 2))) {
                createjs.Sound.play("powerUpFX");
                this.scoreboard.score += 100;
                
                this.powerUp.reset();
                
            }
        }

        // check collision between ship and one up
        private shipAndOneUp() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.x;
            p1.y = this.ship.y;
            p2.x = this.oneUp.x;
            p2.y = this.oneUp.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.oneUp.height / 2))) {
                createjs.Sound.play("oneUpFX");
                this.scoreboard.lives += 1;
                this.oneUp.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.shipAndEnemy(this.enemies[count]);
            }
            this.shipAndPowerUp();
            this.shipAndOneUp();
        }
    }
} 