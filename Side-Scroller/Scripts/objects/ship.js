/*
Programmed By: Bradley Haveman
Site Name: Side Scroller
File Name: ship.ts
Date: November 10th 2014
Decription: Holds the ship objectr
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
    // Ship Class
    var Ship = (function (_super) {
        __extends(Ship, _super);
        //initialize the ship
        function Ship(stage, game) {
            _super.call(this, "ship");
            this.x = 100;

            game.addChild(this);
        }
        //make the ship follow the mouse
        Ship.prototype.update = function () {
            this.y = this.stage.mouseY;
        };

        //destroy the ship
        Ship.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Ship;
    })(objects.GameObject);
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map
