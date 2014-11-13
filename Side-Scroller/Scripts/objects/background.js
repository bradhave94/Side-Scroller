/*
Programmed By: Bradley Haveman
Site Name: Side Scroller
File Name: background.ts
Date: November 10th 2014
Decription: This filehold the background object
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
    // Background Class
    var Background = (function (_super) {
        __extends(Background, _super);
        //initialize object
        function Background(stage, game) {
            _super.call(this, managers.Assets.loader.getResult("background"));
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.dy = 5;

            //add to the stage
            game.addChild(this);

            this.reset();
        }
        //this method resets the background to its original position
        Background.prototype.reset = function () {
            this.x = -1;
        };

        //This method constanlu updats the backgroud position
        Background.prototype.update = function () {
            this.x -= this.dy;
            if (this.x <= -1920) {
                this.reset();
            }
        };

        //Removes the background
        Background.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map
