/// <reference path="../managers/asset.ts" />
module objects {
    // PowerUp Class
    export class PowerUp extends objects.GameObject {
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("powerUp");
            this.reset();

            this.dx = 10;

            game.addChild(this);
        }

        update() {
            this.x -= this.dx;
            if (this.x < -10 + this.width) {
                this.reset();
            }
        }

        reset() {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width;
        }

        destroy() {
            game.removeChild(this);
        }
    }

}