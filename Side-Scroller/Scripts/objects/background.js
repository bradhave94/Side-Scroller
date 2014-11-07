var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Background Class
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background(stage, game) {
            _super.call(this, managers.Assets.loader.getResult("background"));
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.dy = 5;

            game.addChild(this);

            this.reset();
        }
        Background.prototype.reset = function () {
            this.x = -1;
        };

        Background.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= -1920) {
                this.reset();
            }
        };

        Background.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map
