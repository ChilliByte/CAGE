//Depends on module "ai", "platform"
if(modules.indexOf("platform") == -1) {
  throw "DependancyError: Module platform is required for Module movingPlatform";
} else if(modules.indexOf("ai") == -1) {
  throw "DependancyError: Module ai is required for Module movingPlatform";
} else {
  //Push "platform" to list of included modules
  modules.push("movingPlatform");
  
  var MovingPlatform = class MovingPlatform extends Platform {
    constructor(x,y,w,h,tile,ai,aiData) {
      super(x,y,w,h,tile);
      this.vX = 0;
      this.vY = 0;
      this.encountered = false;
      this.ai = ai;
      this.aiData = aiData;
      this.initial = {
        x: x*u,
        y: y*u
      };
    }
    
    draw() {
      this.t.draw(this.x,this.y,this.w,this.h);
    }
    
    update() {
      if((!this.encountered) && (this.x < 40*u)) {
        this.encountered = true;
      }
      if(this.encountered) {
        this.ai();
        this.move();
      }
    }
    
    reset() {
      this.x = this.initial.x;
      this.y = this.initial.y;
    }
      
    move() {
      this.x += this.vX;
      this.y += this.vY;
    }
      
    collision(obj,dir) {
      if(dir == "b") {
        obj.x += this.vX;
        obj.y += this.vY;
        if((obj == Player.getLeader()) && (levels[currentLevel].offset < (levels[currentLevel].len - (40*u)))) {
          levels[currentLevel].scroll(this.vX);
        }
      }
    }  
  };
}
