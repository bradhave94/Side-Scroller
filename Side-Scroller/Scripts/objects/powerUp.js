/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // PowerUp Class
    var PowerUp = (function () {
        function PowerUp(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "powerUp");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 10;

            game.addChild(this.image);
        }
        PowerUp.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -10 + this.width) {
                this.reset();
            }
        };

        PowerUp.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = stage.canvas.width;
        };

        PowerUp.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return PowerUp;
    })();
    objects.PowerUp = PowerUp;
})(objects || (objects = {}));
//# sourceMappingURL=powerUp.js.map
