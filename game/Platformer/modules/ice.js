//Depends on module "box"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module ice";
} else {
  modules.push("ice");
  
  var Ice = class Ice extends Box {
    draw() {
      c.fillStyle = "#eeeeff"; //White with a hint of blue
      c.fillRect(this.x, this.y,this.w, this.h);
    }
  };
  Ice.type = "static";
}