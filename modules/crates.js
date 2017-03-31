//Depends on module "box"
if(modules.indexOf("projectile") == -1) {
  throw "DependancyError: Module projectile is required for Module crate";
} else {
  //Push "platform" to list of included modules
  modules.push("crates");
  
  
  var Crate = class Crate extends Projectile {
    constructor(x,y,h,w,resettable,contents) {
      super(x,y,h,w,0,0,false);
      this.c = contents;
      this.friction = BoxFriction;
      this.isOpened = false;
      this.resettable = resettable;
      this.initial = {
        x: x*u,
        y: y*u
      };
    }
    
    draw() {
      if(!this.isOpened) {
        c.fillStyle = "yellow";
        c.fillRect(this.x,this.y,this.w,this.h);
      }
    }
    
    update(multiplier) {
      if(!this.isOpened) {
        this.move(multiplier);
        this.c.x = this.x;
        this.c.y = this.y;
        this.vY += gravity;
        this.vX *= Math.pow(this.friction,multiplier);
        var dir = game.levels[currentLevel].colCheck(this);
        this.checkDir(dir);
      }
    }
    
    collision(obj,dir) {
      if(!this.isOpened) {
        if(obj.constructor.name == "Player") {
          if(keys[obj.controls.open]) {
            this.destroy();
          }
          
          if ((dir == "l") || (dir == "r")){
            this.vX = obj.vX;
          } else if(dir == "b") {
            obj.y = this.y - obj.h;
            obj.vY = -gravity;
          }
        }
      }
    }
    
    destroy() {
      if(!this.isOpened) {
        game.levels[currentLevel].collectibles.push(this.c);
        this.isOpened = true;
      }
    }
    
    reset() {
      if(this.resettable) {
        this.x = this.initial.x;
        this.y = this.initial.y;
        this.isOpened = false;
      }
    }
    
    checkDir(dir) {
      if(dir.indexOf("Ice") != -1) {
        this.friction = IceFriction;
      } else {
        this.friction = BoxFriction;
      }
    }
  };
  
  Crate.type = "dynamic";
}
