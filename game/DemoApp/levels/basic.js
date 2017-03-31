var basicLevel;

basicLevel = new Level(60,noBg,noFg);
basicLevel.statics.push(
  new Platform(0,18,30,2,dirt),
  new Platform(30,17,30,3,dirt)
);
console.log("basic.js Loaded");