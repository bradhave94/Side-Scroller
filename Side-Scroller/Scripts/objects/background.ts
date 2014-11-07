/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Background {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        reset() {
            this.image.x = -1;
        }

        update() {
            this.image.x -= this.dy;
            if (this.image.x <= -1920) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}