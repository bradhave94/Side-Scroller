module objects {
    // GameObject Class
    export class GameObject extends createjs.Sprite {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        constructor(imageString: string) {
            super(managers.Assets.atlas, imageString);
            this.stage = stage;
            this.game = game; 
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

    }

} 