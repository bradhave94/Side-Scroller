/*
Programmed By: Bradley Haveman
Site Name: Side Scroller
File Name: enemy.ts
Date: November 10th 2014
Decription: holds the enemy object
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Enemy class
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        //initialize enemy
        function Enemy(stage, game) {
            _super.call(this, "enemy");
            this.reset();
            game.addChild(this);
        }
        //update the position
        Enemy.prototype.update = function () {
            this.y -= this.dy;
            this.x -= this.dx;
            if (this.x < -100 + this.width) {
                this.reset();
            }
        };

        //reset the position
        Enemy.prototype.reset = function () {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width + this.width;
            this.dy = Math.floor(Math.random() * 4 - 2);
            this.dx = Math.floor(Math.random() * 6 + 8);
        };

        //destroy the object
        Enemy.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
