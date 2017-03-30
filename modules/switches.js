//Depends on module "ai", "platform"
if(modules.indexOf("platform") == -1) {
  throw "DependancyError: Module platform is required for Module switch";
} else {
  //Push "platform" to list of included modules
  modules.push("switch");
  
  var Switch = class Switch extends Box {
    constructor(x,y,sprite1,sprite2,defaultPosition,entity) {
      super(x,y,1,2,false);
      this.on = defaultPosition;
      this.defaultPosition = defaultPosition;
      this.entity = entity;
      this.s1 = sprite1;
      this.s2 = sprite2;
    }
    
    draw() {
      if(this.open) {
        this.s1.draw(this.x,this.y,this.w,this.h);
      } else {
        this.s2.draw(this.x,this.y,this.w,this.h);
      }  
    }
    
    collision(obj,dir) {
      if(obj.constructor.name  == "Player") {
        var triggered;
        if (keys[obj.controls.open]) {
          if (!triggered) {
            //Do something depending on the direction the collision happened from.
            this.on = !this.on;
            this.entity.update();
            triggered = true;
          }
        } else {
            triggered = false;
        }
      }
    }
      
    reset() {
      this.on = this.defaultPosition;
    }
    
  };
}
