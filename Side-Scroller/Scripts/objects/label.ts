/*
   Programmed By: Bradley Haveman
    Site Name: Side Scroller
    File Name: label.ts
    Date: November 10th 2014
    Decription: hold label object
*/

/// <reference path="../constants.ts" />
module objects {
    export class Label extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
} 