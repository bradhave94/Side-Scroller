/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Enemy class
    var Enemy = (function () {
        function Enemy(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "enemy");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Enemy.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            if (this.image.x < -100 + this.width) {
                this.reset();
            }
        };

        Enemy.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = stage.canvas.width + this.width;
            this.dy = Math.floor(Math.random() * 4 - 2);
            this.dx = Math.floor(Math.random() * 6 + 8);
        };

        Enemy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Enemy;
    })();
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
