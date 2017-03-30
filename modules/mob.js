//Depends on modules projectile
if(modules.indexOf("projectile") == -1) {
  throw "Dependancy Error: Module projectile is required for Module player";
} else {
  modules.push("mob");
  
  var Mob = class Mob extends Projectile {
    constructor(x,y,h,w,ai,aiData,aiHit) {
      super(x,y,h,w,1,1,true);
      this.initial = {
        x: x*u,
        y: y*u
      };
      this.ai = ai;
      this.aiData = aiData;
      this.aiHit = aiHit;
      if(aiHit === undefined) {
        this.aiHit = this.kill;
      }
      this.encountered = false;
      this.dead = false;
      this.friction = BoxFriction;
    }
    
    update() {
      if(!this.dead) {
        if((!this.encountered) && (this.x < 40*u)) {
          this.encountered = true;
        }
        if(this.encountered) {
          this.ai();
          this.move(multiplier);
          var dir = levels[currentLevel].colCheck(this);
          this.checkDir(dir);
          this.vX *= Math.pow(this.friction,multiplier);
          this.vY += gravity * multiplier;
        }
      }
    }
    
    kill() {
      this.dead = true;
      this.x = 50*u;
      this.y = 50*u;
    }
    
    
    reset() {
      this.dead = false;
      this.encountered = false;
      this.x = this.initial.x;
      this.y = this.initial.y;
    }
    
    collision(obj,dir) {
      //Dynamic Object has collided with mob
      var objType = obj.constructor.name;
      if(objType == "Player") {
        if(dir == "b") {
          this.aiHit();
          obj.vY = -1*obj.vYmax; 
          obj.isJumping = false;
        } else {
          obj.hit(this.aiData.dmg);
          if(dir == "l") {
            obj.vY = -obj.vYmax;
            obj.vX = obj.vXmax;
            obj.isJumping = true;
          }
          if(dir == "r") {
            obj.vY = -obj.vYmax;
            obj.vX = -obj.vXmax;
            obj.isJumping = true;
          }
        }
      }
      if(objType == "Mob") {
        if(dir == "r") {
          this.x -= obj.w;
          obj.x += this.w ;
        }
        if(dir == "l") {
          this.x += obj.w;
          obj.x -= this.w ;
        }
      }
    }
    
    checkDir(dir) {
      if(dir.indexOf("b") != -1) {
        this.aiData.isJumping = false;
      }
      if(dir.indexOf("Ice") != -1) {
        this.friction = IceFriction;
      } else {
        this.friction = BoxFriction;
      }
    }
    
    draw() {
      if ((this.encountered) && (!this.dead)) {
        MobSprite.draw(this);
      }
    }
  };
  console.log("Mob.js loaded");
}