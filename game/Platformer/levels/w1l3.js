var w1l3;

w1l3 = new Level(200,level3Bg,level3Fg);

w1l3.statics.push(
  new Platform(  0, 14,  7,  6, noTile),
  new Platform( 10, 17, 40,  3, noTile),
  new Platform( 40, 13, 10,  4, noTile),
  new Platform( 60, 13,  7,  7, noTile),
  new Platform( 74, 13,  7,  7, noTile),
  new Platform(104,  6,  8, 14, noTile),
  new Platform(126,  6,  4, 14, noTile),
  new Platform(154,  9,  6, 11, noTile),
  new Platform(170, 17, 11,  1, noTile),
  new Platform(170, 18, 30,  2, noTile),
  new Platform(170, 16, 10,  1, noTile),
  new Platform(170, 15,  9,  1, noTile),
  new Platform(170, 14,  8,  1, noTile),
  new Platform(170, 13,  7,  1, noTile),
  new Platform(170, 12,  6,  1, noTile),
  new Platform(170, 11,  5,  1, noTile),
  new Platform(170, 10,  4,  1, noTile),
  new Platform(192, 11,  2,  2, noTile),
  new Platform(195,  0,  5,  9, noTile),
  new Platform(195, 15,  5,  9, noTile),
  new Platform(196,  9,  4,  1, noTile),
  new Platform(196, 14,  4,  1, noTile)
);

w1l3.dynamics.push(
  new Mob(24,15,2,2,PatrolAI,{dmg:10,x1:10,x2:40,vX:1.6,dir:1,}),
  new Mob(53.5,7,3,3,VerticalPatrolAI,{dmg:15,y1:5,y2:19,vY:1.6,dir:1}),
  new Mob(69,7,3,3,VerticalPatrolAI,{dmg:15,y1:5,y2:19,vY:1.6,dir:-1}),
  new Mob(86,13,1,1,NoAI,{dmg:5,}),
  new Mob(99,9,1,1,NoAI,{dmg:5,}),
  new Mob(117,10,2,2,VerticalPatrolAI,{dmg:10,y1:1,y2:16,vY:4,dir:1}),
  new Mob(163,16,4,4,VerticalPatrolAI,{dmg:20,y1:9,y2:19,vY:2,dir:-1}),
  
  new MovingPlatform(85,14,3,1, dirt, PatrolAI,{x1:83,x2:101,vX:5,dir:1}),
  new MovingPlatform(98,10,3,1, dirt, PatrolAI,{x1:92,x2:101,vX:5,dir:-1}),
  new MovingPlatform(132,10,3,1, dirt, VerticalPatrolAI,{y1:6,y2:19,vY:1,dir:1}),
  new MovingPlatform(140,10,3,1, dirt, VerticalPatrolAI,{y1:6,y2:19,vY:10,dir:-1}),
  new MovingPlatform(148,10,3,1, dirt, VerticalPatrolAI,{y1:9,y2:19,vY:7,dir:1})
);
console.log("World-1 Level-3 (w1l3.js) Loaded");