﻿/*
Programmed By: Bradley Haveman
Site Name: Side Scroller
File Name: powerUp.ts
Date: November 10th 2014
Decription: holds the powerUp object
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
    // PowerUp Class
    var PowerUp = (function (_super) {
        __extends(PowerUp, _super);
        //initialize the powerUp object
        function PowerUp(stage, game) {
            _super.call(this, "powerUp");
            this.reset();

            this.dx = 10;

            game.addChild(this);
        }
        //update positon
        PowerUp.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -10 + this.width) {
                this.reset();
            }
        };

        //reset postion
        PowerUp.prototype.reset = function () {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width + 300;
        };

        //destroy object
        PowerUp.prototype.destroy = function () {
            game.removeChild(this);
        };
        return PowerUp;
    })(objects.GameObject);
    objects.PowerUp = PowerUp;
})(objects || (objects = {}));
//# sourceMappingURL=powerUp.js.map
