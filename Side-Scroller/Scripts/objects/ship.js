/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ship Class
    var Ship = (function () {
        function Ship(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "ship");
            this.image.x = 100;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Ship.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };
        Ship.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Ship;
    })();
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map
