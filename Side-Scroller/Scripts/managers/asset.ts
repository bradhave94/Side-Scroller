module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "background", src: "assets/images/bg.jpg" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [650, 65, 91, 50],
            [400, 2, 207, 67],
            [291, 78, 46, 14],
            [609, 2, 205, 61],
            [609, 65, 39, 53],
            [400, 71, 38, 48],
            [184, 78, 52, 39],
            [238, 78, 51, 39],
            [2, 2, 180, 117],
            [184, 2, 214, 74]
        ],
        "animations": {

            "enemy": [0],
            "instructionsButton": [1],
            "missile": [2],
            "playButton": [3],
            "powerUp": [4, 7, "powerUp", 0.2],
            "ship": [8],
            "tryAgainButton": [9]
        }
    }


    
    

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static power: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 