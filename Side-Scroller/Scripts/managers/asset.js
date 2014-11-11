var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "background", src: "assets/images/bg.jpg" },
        { id: "explosionFX", src: "assets/sounds/explosionFX.mp3" },
        { id: "soundtrack", src: "assets/sounds/soundtrack.mp3" },
        { id: "powerUpFX", src: "assets/sounds/powerUpFX.mp3" },
        { id: "oneUpFX", src: "assets/sounds/OneUpFX.mp3" },
        { id: "intro", src: "assets/sounds/intro.mp3" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [568, 103, 54, 52],
            [506, 47, 91, 50],
            [737, 2, 36, 48],
            [624, 105, 54, 48],
            [599, 47, 57, 54],
            [677, 2, 58, 54],
            [506, 99, 60, 48],
            [658, 58, 56, 45],
            [377, 121, 47, 36],
            [426, 137, 39, 11],
            [426, 121, 46, 14],
            [2, 2, 320, 160],
            [716, 58, 39, 53],
            [734, 113, 38, 48],
            [680, 113, 52, 39],
            [324, 121, 51, 39],
            [324, 2, 180, 117],
            [506, 2, 169, 43]
        ],
        "animations": {
            "oneUp": [0],
            "enemy": [1],
            "explosion1": [2],
            "explosion2": [3],
            "explosion3": [4],
            "explosion4": [5],
            "explosion5": [6],
            "explosion6": [7],
            "explosion7": [8],
            "laser": [9],
            "missile": [10],
            "playButton": [11],
            "powerUp": [12, 15, "powerUp", 0.2],
            "ship": [16],
            "tryAgainButton": [17]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
