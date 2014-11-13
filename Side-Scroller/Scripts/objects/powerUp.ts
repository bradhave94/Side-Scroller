/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: powerUp.ts
    Date: November 10th 2014
    Decription: holds the powerUp object
*/

/// <reference path="../managers/asset.ts" />
module objects {
    // PowerUp Class
    export class PowerUp extends objects.GameObject {
        dx: number;
        //initialize the powerUp object
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("powerUp");
            this.reset();

            this.dx = 10;

            game.addChild(this);
        }

        //update positon 
        update() {
            this.x -= this.dx;
            if (this.x < -10 + this.width) {
                this.reset();
            }
        }

        //reset postion
        reset() {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width + 300;
        }

        //destroy object
        destroy() {
            game.removeChild(this);
        }
    }

}