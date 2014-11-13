/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: oneUp.ts
    Date: November 10th 2014
    Decription: hold the onuUp object
*/

/// <reference path="../managers/asset.ts" />
module objects {
    // OneUp Class
    export class OneUp extends objects.GameObject {
        dx: number;
        //initialize object
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("oneUp");
            this.reset();

            this.dx = 5;

            //add object
            game.addChild(this);          
        }

        //update the object psition
        update() {
            this.x -= this.dx;
            if (this.x < -500 + this.width) {
                this.reset();
            }
        }

        //reset the object position
        reset() {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = stage.canvas.width + 10000;
        }

        //destroy the object
        destroy() {
            game.removeChild(this);
        }
    }

} 