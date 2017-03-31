var demoLevel2;

demoLevel2 = new Level(60,demoBg,{draw:function(){}});

demoLevel2.statics.push(
  new Platform(-5, 18, 70, 2,  dirt),
  new Platform(5,  14, 1,  10, dirt),
  new Platform(7,  14, 1,  10, dirt),
  new Platform(9,  14, 1,  10, dirt),
  new Platform(11, 14, 1,  10, dirt),
  new Platform(13, 14, 1,  10, dirt),
  new Platform(15, 14, 1,  10, dirt),
  new Platform(17, 14, 1,  10, dirt),
  new Ice(20,17,10,10, dirt)
);

console.log("Demo2.js Loaded");