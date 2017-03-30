//Depends on module "box"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module collectible";
} else {
  modules.push("collectible");
  
  var Collectible = class Collectible extends Box {
    constructor(x,y,w,h,tile) {
      super(x,y,w,h,false);
      this.collected = false;
      this.t = tile;
    }
    
    update() {
      var i = players.length;
      var dir = "";
      while(i--) {
        dir = Box.colCheck(this, players[i]);
        if(dir !== null) {
          this.collect(players[i]);
        }
      }
    }
    
    collect() {
      this.collected = true;
    }
    
    draw() {
      if (!this.collected) {
        this.t.draw(this.x,this.y,this.w,this.h);
      }
    }
  };
}