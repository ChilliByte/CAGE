var w1boss;

w1boss = new Level(80,level4Bg,level4Fg);

w1boss.statics.push(
  new Platform(0,  18, 80, 2,  noTile),
  new Platform(30, 14, 10.01, 6,  noTile),
  new Platform(40, 14, 1, 1,  noTile),
  new Platform(40, 0,  1,  11,  noTile),
  new Platform(72, 14, 8,  1,  noTile),
  new Platform(80, 0, 1, 14,  noTile),
  
  new Door(40,11,1,3,dirt,true,0),
  new Door(74,15,1,3,dirt,false,1)

);
var bossPlat = new MovingPlatform(72,13,8,1, dirt, PatrolAI,{x1:41.05,x2:79.95,vX:0,dir:-1});
var bossMob =  new Mob(72,6,8,8,Boss1AI,{dmg:50,health:4,locked:false},Boss1Hit);
w1boss.dynamics.push(
 bossMob,
 bossPlat
);

w1boss.reset = function() {
  bossMob.aiData = {dmg:50,health:4,locked:true,stage:undefined};
  bossMob.x = 32*u;
  bossMob.y = 6*u;
  bossPlat.x = 32*u;
  bossPlat.aiData.vX = 0;
  
};

w1boss.collectibles.push(
//  new Coin(45,15.25,coin),
  //new sizePowerUp(04,13,coin,2,true),
  //new sizePowerUp(11,13,coin,0.5,true)
);

console.log("World 1 Boss Level (w1boss.js) Loaded");