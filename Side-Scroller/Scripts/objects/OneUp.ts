/// <reference path="../managers/asset.ts" />
module objects {
    // OneUp Class
    export class OneUp extends objects.GameObject {
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("oneUp");
            this.reset();

            this.dx = 5;

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