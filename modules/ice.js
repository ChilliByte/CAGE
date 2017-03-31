//Depends on module "box"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module ice";
} else {
  modules.push("ice");
  
  var Ice = class Ice extends Box {
    draw() {
      this.t.draw(this.x,this.y,this.w,this.h);
    }
  };
  Ice.type = "static";
}