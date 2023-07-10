let level1;

function initLevel() {
    level1 = new Level([
        new GreenFish(),
        new GreenFish(),
        new GreenFish(),
        new RedFish(),
        new RedFish(),
        new RedFish(),
        new TransitonGreenFish(),
        new TransitonGreenFish(),
        new TransitonGreenFish(),
        new BubbleFish(),
        new BubbleFish(),
        new BubbleFish(),
        new JellyFishLila(),
        new JellyFishLila(),
        new JellyFishLila()
    ],
        [
            new Background('img/3. Background/Layers/5. Water/L2.png', -720, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L2.png', -720, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L2.png', -720, 0),
            new Background('img/3. Background/Layers/2. Floor/L2.png', -720, 0),
            new Background('img/3. Background/Layers/1. Light/1.png', -720, 0),

            new Background('img/3. Background/Layers/5. Water/L1.png', 0, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L1.png', 0, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 0, 0),
            new Background('img/3. Background/Layers/2. Floor/L1.png', 0, 0),
            new Background('img/3. Background/Layers/1. Light/1.png', 0, 0),

            new Background('img/3. Background/Layers/5. Water/L2.png', 720, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L2.png', 720, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 720, 0),
            new Background('img/3. Background/Layers/2. Floor/L2.png', 720, 0),

            new Background('img/3. Background/Layers/5. Water/L1.png', 1440, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L1.png', 1440, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 1440, 0),
            new Background('img/3. Background/Layers/2. Floor/L1.png', 1440, 0),
            new Background('img/3. Background/Layers/1. Light/1.png', 1440, 0),

            new Background('img/3. Background/Layers/5. Water/L2.png', 2160, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L2.png', 2160, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 2160, 0),
            new Background('img/3. Background/Layers/2. Floor/L2.png', 2160, 0),
            new Background('img/3. Background/Layers/1. Light/1.png', 2160, 0),

            new Background('img/3. Background/Layers/5. Water/L1.png', 2880, 0),
            new Background('img/3. Background/Layers/3.Fondo 1/L1.png', 2880, 0,),
            new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 2880, 0),
            new Background('img/3. Background/Layers/2. Floor/L1.png', 2880, 0),
            new Background('img/3. Background/Layers/1. Light/1.png', 2880, 0),
        ]
    )
};
