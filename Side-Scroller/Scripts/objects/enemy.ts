/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy class
    export class Enemy extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("enemy");
            this.reset();
            game.addChild(this);
        }

        update() {
            this.y -= this.dy;
            this.x -= this.dx;
            if (this.x < -100 + this.width) {
                this.reset();
            }
        }

        reset() {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width + this.width;
            this.dy = Math.floor(Math.random() * 4 - 2);
            this.dx = Math.floor(Math.random() * 6 + 8);
        }

        destroy() {
            game.removeChild(this);
        }
    }

}