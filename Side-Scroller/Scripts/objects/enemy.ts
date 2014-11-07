/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy class
    export class Enemy {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update() {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            if (this.image.x < -100 + this.width) {
                this.reset();
            }
        }

        reset() {
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = stage.canvas.width + this.width;
            this.dy = Math.floor(Math.random() * 4 - 2);
            this.dx = Math.floor(Math.random() * 6 + 8);
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}