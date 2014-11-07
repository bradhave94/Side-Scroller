var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "background", src: "assets/images/bg.jpg" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [609, 65, 91, 50],
            [400, 2, 207, 67],
            [184, 78, 46, 14],
            [609, 2, 205, 61],
            [2, 2, 180, 117],
            [184, 2, 214, 74]
        ],
        "animations": {
            "enemy": [0],
            "instructionsButton": [1],
            "missile": [2],
            "playButton": [3],
            "ship": [4],
            "tryAgainButton": [5]
        }
    };

    var powerUpSprit = {
        "images": ["assets/images/powerUp.png"],
        "frames": [
            [2, 2, 39, 53],
            [43, 2, 38, 48],
            [83, 2, 52, 39],
            [137, 2, 51, 39]
        ],
        animations: { powerUpSprite: [0, 3, "powerUpSprite", 0.3] }
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
            this.power = new createjs.SpriteSheet(powerUpSprit);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
