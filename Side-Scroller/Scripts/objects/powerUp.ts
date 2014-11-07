/// <reference path="../managers/asset.ts" />
module objects {
    // PowerUp Class
    export class PowerUp {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.power);
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dy;
            if (this.image.x < -10 + this.width) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = stage.canvas.width + 5000;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}