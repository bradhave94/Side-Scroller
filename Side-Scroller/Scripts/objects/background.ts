/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Background extends createjs.Bitmap {
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(managers.Assets.loader.getResult("background"));
            this.stage = stage;
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.dy = 5;

            game.addChild(this);

            this.reset();
        }

        reset() {
            this.x = -1;
        }

        update() {
            this.x -= this.dy;
            if (this.x <= -1920) {
                this.reset();
            }
        }

        destroy() {
            game.removeChild(this);
        }
    }

}