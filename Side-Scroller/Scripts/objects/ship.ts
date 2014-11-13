/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: ship.ts
    Date: November 10th 2014
    Decription: Holds the ship objectr
*/

/// <reference path="../managers/asset.ts" />
module objects {
    // Ship Class
    export class Ship extends objects.GameObject {

       //initialize the ship
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("ship");
            this.x = 100;
          
            game.addChild(this);
            
        }

        //make the ship follow the mouse
        update() {
            this.y = this.stage.mouseY;
        }

        //destroy the ship
        destroy() {
            
            game.removeChild(this);
        }
    }
} 