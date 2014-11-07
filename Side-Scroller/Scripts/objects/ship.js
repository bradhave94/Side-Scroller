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
        function Ship(stage, game) {
            _super.call(this, "ship");
            this.x = 100;

            game.addChild(this);
            this.soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Ship.prototype.update = function () {
            this.y = this.stage.mouseY;
        };
        Ship.prototype.destroy = function () {
            this.soundtrack.stop();
            game.removeChild(this);
        };
        return Ship;
    })(objects.GameObject);
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map
