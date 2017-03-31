//Depends on module "box"
if(modules.indexOf("box") == -1) {
  throw "DependancyError: Module box is required for Module projectile";
} else {
  //Push "projectile" to list of included modules
  modules.push("projectile");
  
  //super() calls the Box constructor, before adding vX and vY properties, which store XY velocity
  var Projectile = class Projectile extends Box {
    constructor(x,y,height,width,vX,vY,solid) {
      super(x,y,height,width,solid);
      this.vX = vX;
      this.vY = vY;
    }
    
    move(multiplier) {
      this.x += this.vX * multiplier;
      this.y += this.vY * multiplier;
    }
  };
  Projectile.type = "dynamic";
}

console.log("Projectile.js Loaded");