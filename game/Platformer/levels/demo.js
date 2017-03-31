var demoLevel;

demoLevel = new Level(60,demoBg,noBg);

demoLevel.statics.push(
  new Platform(-1, 0,  1,  20, dirt),
  new Platform(0,  18, 13, 2,  dirt),
  new Platform(3,  14, 10, 10, dirt),
  new Platform(29, 1,  1,  1,  dirt),
  new Platform(29, 12, 1,  1,  dirt),
  new Platform(40, 17, 40, 3,  dirt)

);
demoLevel.dynamics.push(
  new Mob(26,6,2,2,VerticalPatrolAI,{y1:1,y2:12,vY:1,dir:1}),
  new MovingPlatform(10,10,10,2, dirt, PatrolAI,{x1:1,x2:40,vX:1,dir:1}),
  new BouncingPlatform(15, 18, 23, 2,  dirt)
);
demoLevel.collectibles.push(
  new Coin(45,15.25,coin),
  new sizePowerUp(04,13,coin,2,true),
  new sizePowerUp(11,13,coin,0.5,true)
);

console.log("Demo.js Loaded");