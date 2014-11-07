/// <reference path="../managers/asset.ts" />
module objects {
    // Ship Class
    export class Ship extends objects.GameObject {
        soundtrack: createjs.SoundInstance;
       
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("ship");
            this.x = 100;
          
            game.addChild(this);
            this.soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            this.y = this.stage.mouseY;
        }
        destroy() {
            this.soundtrack.stop();
            game.removeChild(this);
        }
    }
} 