if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module projectile";
} else {
  modules.push("projectile");
  
  var Projectile = class Projectile extends Box {
    constructor(x,y,height,width,vX,vY) {
      super(x,y,height,width);
      this.vX = vX*u;
      this.vY = vY*u;
    }
  };
}