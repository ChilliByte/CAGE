var levels = [];
modules.push("level");

var Level = class Level {
  constructor(length,background,foreground) {
    this.len = length*u;
    this.offset = 0;
    this.statics = [];
    this.dynamics = [];
    this.collectibles = [];
    this.background = background;
    this.foreground = foreground;
    this.scrollLock = false;
    levels.push(this);
    this.index = levels.length-1;
  }
  
  add(...args) {
    for(var i in args) {
      var obj = args[i];
      if(obj.constructor.type == "static") {
        this.statics.push(obj);
      } else if(obj.constructor.type == "dynamic") {
        this.dynamics.push(obj);
      } else if(obj.constructor.type == "collectible") {
        this.collectibles.push(obj);
      } else {
        throw "Error adding to scene: Object" + obj + " is not of a valid type";
      }
    }
  }
  
  //Loop through every item in the scene and see if obj has collided with it,
  //Returns an array of all the collision directions relative to obj.
  //Updates any dynamic objects of collision, if one is detected
  colCheck(obj) {
    var dir = [];
    var temp = "";
    var i = this.statics.length;
    while(i--) {
      temp = Box.colCheck(obj,this.statics[i]);
      if(temp !== null) {
        dir.push(temp);
        dir.push(this.statics[i].constructor.name);
      }
    }
    i = this.dynamics.length;
    while(i--) {
      if(this.dynamics[i] != obj) {
        temp = Box.colCheck(obj,this.dynamics[i]);
        if(temp !== null) {
          dir.push(temp);
          dir.push(this.dynamics[i].constructor.name);
          this.dynamics[i].collision(obj,temp);
        }
      }
    }
    return dir;
  }
  
  update(multiplier) {
    //Update all the entities that may have changed
    var i = this.dynamics.length;
    while(i--) {
      this.dynamics[i].update(multiplier);
    }
    
    i = this.collectibles.length;
    while(i--) {
      this.collectibles[i].update();
    }
    //Get the rightmost player
    var lead = Player.getLeader();
    
    //If they are in the center of the screen and not at the end of the level, scroll the level left
    if((lead.vX > 0.1) && (lead.x > 18*u) && (this.offset < (this.len - (40*u)) && !this.scrollLock)) {
      this.scroll(lead.vX);
    }
    //If they are in the center of the screen and not at the start of the level, scroll the level right
    if((lead.vX < -0.1) && (lead.x < 17*u) && (this.offset > 0) && !this.scrollLock) {
      this.scroll(lead.vX);
    }
    
    //Make sure the level is not scrolled past its max and minimum
    if(this.offset < 0) {
      this.scroll(-this.offset);
    }
    if(this.offset > this.len - 40*u) {
      this.scroll((this.len - (40*u)) - this.offset);
    }
    
    //Handle level switching
    if(lead.x > 40*u) {
      Player.moveAll(1,10);
      currentLevel++;
    }
    if((lead.x < 0) && (currentLevel > 0)) {
      Player.moveAll(39,10);
      currentLevel--;
    }
    if(currentLevel >= levels.length) {
      currentLevel = 0;
    }
  }
  
  draw() {
    this.background.draw(this.offset);
    var i = this.statics.length;
    while(i--) {
      this.statics[i].draw();
    }
    
    i = this.dynamics.length;
    while(i--) {
      this.dynamics[i].draw();
    }
    
    i = this.collectibles.length;
    while(i--) {
      this.collectibles[i].draw();
    }
    
    this.foreground.draw(this.offset);
  }
  
  scroll(x) {
    var i = this.dynamics.length;
    while(i--) {
      this.dynamics[i].x -= x;
    }
    i = this.statics.length;
    while(i--) {
      this.statics[i].x -= x;
    }
    
    i = this.collectibles.length;
    while(i--) {
      this.collectibles[i].x -= x;
    }
    this.offset += x;
    Player.scroll(x);
  }
  
  reset() {
    this.scroll(-this.offset);
    var i = this.dynamics.length;
    while(i--) {
      this.dynamics[i].reset();
    }
  }
};


console.log("Level.js Loaded");