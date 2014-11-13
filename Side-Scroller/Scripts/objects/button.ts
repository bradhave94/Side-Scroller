/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: button.ts
    Date: November 10th 2014
    Decription: holds the button object
*/

/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Button extends createjs.Sprite {
        constructor(x:number, y:number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        //Check for events
        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        //chage the image if mouse is over it
        onButtonOver() {
            this.alpha = 0.8;
        }

        //reset the image to the original
        onButtonOut() {
            this.alpha = 1;
        }
    }
} 