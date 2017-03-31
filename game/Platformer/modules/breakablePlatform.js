//Depends on module "ai", "platform"
if(modules.indexOf("platform") == -1) {
  throw "DependancyError: Module platform is required for Module breakablePlatform";
} else if(modules.indexOf("player") == -1) {
  throw "DependancyError: Module player is required for Module breakablePlatform";
} else if(modules.indexOf("level") == -1) {
  throw "DependancyError: Module level is required for Module breakablePlatform";
} else {
  //Push "platform" to list of included modules
  modules.push("breakablePlatform");
  
  var BreakablePlatform = class BreakablePlatform extends Platform {
    constructor(x,y,w,h,tile,data) {
      super(x,y,w,h,tile);
      this.d = data;
    }
    
    draw() {
      this.t.draw(this.x,this.y,this.w,this.h);
    }
    
    update() {}
      
    reset() {}
      
    move() {}
      
    collision(obj,dir) {
      if(obj.constructor.name == "Player") {
        if(dir == "t") {
          this.destroyed = true;
          if(this.d.item) {
            game.levels[currentLevel].collectibles.push(this.d.item);
          }
        }
      }
    }  
  };
  
  BreakablePlatform.type = "dynamic";
}
