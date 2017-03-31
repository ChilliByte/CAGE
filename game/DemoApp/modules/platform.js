//Depends on module "box"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module platform";
} else {
  //Push "platform" to list of included modules
  modules.push("platform");
  
  var Platform = class Platform extends Box {
    constructor(x,y,w,h,tile) {
      super(x,y,w,h,true);
      this.t = tile;
    }
    
    draw() {
      this.t.draw(this.x,this.y,this.w,this.h);
    }
  };
  Platform.type = "static";
}
