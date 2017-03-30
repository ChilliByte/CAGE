var dirt = new RepeatingTile("assets/dirt2.png");

var level1Bg = new Background([
  new Sprite("assets/sky2-100by20.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/sky.png",0,0,40,20,0,0,4000,2000,0)
]);
var level2Bg = new Background([
  new Sprite("assets/sky2-2.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/sky1-2.png",0,0,40,20,0,0,4000,2000,0)
]);

var level3Bg = new Background([
  new Sprite("assets/sky2-100by20.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/dark sky-2.png",0,0,40,20,0,0,4000,2000,0)
]);
var level4Bg = new Background([
  new Sprite("assets/nightSky.png",0,0,40,20,0,0,4000,2000,0)
]);

var level1Fg = new Background([
  new Sprite("assets/levels-1.png",0,0,800,80,0,0,20000,2000,1)
]);

var level2Fg = new Background([
  new Sprite("assets/levels-2.png",0,0,800,80,0,0,20000,2000,1)
]);

var level3Fg = new Background([
  new Sprite("assets/levels-3.png",0,0,800,80,0,0,20000,2000,1)
]);


var level4Fg = new Background([
  new Sprite("assets/levels-4.png",0,0,800,80,0,0,20000,2000,1)
]);

var AlexSprite = new PlayerSprite("assets/spritesheetFinal.png",{
  sw: 25,
  sh: 50,
  drx: 0,
  dry: 50,
  dlx: 25,
  dly: 50,
  urx: 50,
  ury: 0,
  ulx: 75,
  uly: 0,
  lbx: 75,
  lby: 0,
  rbx: 50,    
  rby: 0,
  l1x: 75,
  l1y: 0,
  l2x: 25,
  l2y: 50,
  r1x: 50,
  r1y: 0,
  r2x: 0,
  r2y: 50,
  slx: 25,
  sly: 0,
  srx: 0,
  sry: 0,
  frn: 0,
  afn: 0
});

var MaxSprite = new PlayerSprite("assets/spritesheetFinal2.png",{
  sw: 25,
  sh: 50,
  drx: 25,
  dry: 50,
  dlx: 50,
  dly: 50,
  urx: 50,
  ury: 0,
  ulx: 0,
  uly: 50,
  lbx: 0,
  lby: 50,
  rbx: 50,    
  rby: 0,
  l1x: 0,
  l1y: 50,
  l2x: 50,
  l2y: 50,
  r1x: 50,
  r1y: 0,
  r2x: 25,
  r2y: 50,
  slx: 25,
  sly: 0,
  srx: 0,
  sry: 0,
  frn: 0,
  afn: 0
});

var coin = new Tile("assets/crate.png",0,0,100,100);