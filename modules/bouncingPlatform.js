//Depends on module "ai", "platform"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module bouncingPlatform";
} else {
  //Push "platform" to list of included modules
  modules.push("box");
  
  var BouncingPlatform = class BouncingPlatform extends Box {
    constructor(x,y,w,h,tile) {
      super(x,y,w,h,false);
      this.t = tile;
      this.vX = 0;
      this.vY = 0;

    }
    
    draw() {
      this.t.draw(this.x,this.y,this.w,this.h);
    }
    
    update() {}
      
    reset() {}
      
    move() {}
      
    collision(obj,dir) {
      if(dir == "b") {
        obj.vY = -0.9*Math.abs(obj.vY);
        if(obj.vY < -obj.vYmax) {
          obj.vY = -obj.vYmax;
        }
        if(Math.abs(obj.vY) < 1) {
          obj.vY = 0;
        }
        obj.vY -= gravity;
      }
    }  
  };
  
  BouncingPlatform.type = "dynamic";
}
