/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: background.ts
    Date: November 10th 2014
    Decription: This filehold the background object
*/


/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Background extends createjs.Bitmap {
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        //initialize object
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super(managers.Assets.loader.getResult("background"));
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
        reset() {
            this.x = -1;
        }

        //This method constanlu updats the backgroud position
        update() {
            this.x -= this.dy;
            if (this.x <= -1920) {
                this.reset();
            }
        }

        //Removes the background
        destroy() {
            
            game.removeChild(this);
        }
    }

}