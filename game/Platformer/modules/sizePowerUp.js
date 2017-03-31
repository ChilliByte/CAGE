if(modules.indexOf("collectible") == -1) {
  throw "DependancyError: Module collectible is required for Module sizePowerUp";
} else {
  modules.push("sizePowerUp");
  
  var SizePowerUp = class SizePowerUp extends Collectible {
    constructor(x,y,tile,factor,permanent) {
      super(x,y,0.5,0.5,tile);
      this.ix = x*u;
      this.iy = y*u;
      this.factor = factor;
      this.permanent = permanent;
      this.collected = false;
    }
    
    collect(x) {
      if(!this.collected) {
        this.x = this.ix;
        this.y = this.iy;
        
        var collectedBy = x;
        if(!this.permanent) {
          this.collected = true;
        }
        collectedBy.w = this.factor * u;
        collectedBy.h = this.factor * 2 * u;
      }
    }
  };
  SizePowerUp.type = "collectible";
}