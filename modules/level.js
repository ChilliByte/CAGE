var levels = [];
modules.push("level");


var LevelLoadedEvent = new Event("levelLoaded");

var Level = class Level {
  constructor(length) {
    this.len = length*u;
    this.offset = 0;
    levels.push(this);
    this.index = levels.length-1;
  }
};