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
            [816, 2, 54, 52],
            [814, 65, 91, 50],
            [558, 71, 36, 48],
            [462, 71, 54, 48],
            [714, 65, 57, 54],
            [654, 65, 58, 54],
            [400, 71, 60, 48],
            [596, 71, 56, 45],
            [291, 78, 47, 36],
            [400, 2, 207, 67],
            [340, 94, 39, 11],
            [340, 78, 46, 14],
            [609, 2, 205, 61],
            [773, 65, 39, 53],
            [518, 71, 38, 48],
            [184, 78, 52, 39],
            [238, 78, 51, 39],
            [2, 2, 180, 117],
            [184, 2, 214, 74]
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
            "instructionsButton": [9],
            "laser": [10],
            "missile": [11],
            "playButton": [12],
            "powerUp": [13, 16, "powerUp", 0.2],
            "ship": [17],
            "tryAgainButton": [18]
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
