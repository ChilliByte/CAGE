if(modules.indexOf("projectile") == -1) {
  throw "Dependancy Error: Module projectile is required for Module player";
} else if(modules.indexOf("input") == -1) {
  throw "Dependancy Error: Module input is required for Module player";
} else {
  modules.push("player");
  
  Player = class Player extends Projectile {
    constructor(x,y) {
      super(x,y,2,1,0.1,0);
      this.vXmax = (1/8)*u;
      this.vYmax = (3/10)*u;
      this.isJumping = false;
    } 
    
    move() {
      this.x += this.vX;
      this.y += this.vY;
    }
    
    draw() {
      c.fillStyle = "#3a1944";
      c.fillRect(this.x,this.y,this.w,this.h);
    }
    
    checkKeys() {
      if (keys[39] || keys[68]) {
        // right arrow
        if (this.vX < this.vXmax) {
            this.vX += this.vXmax/4;
        }
      }
      if (keys[37] || keys[65]) {
          // left arrow
          if (this.vX > -this.vXmax) {
              this.vX -= this.vXmax/4;
          }
      }
      
      this.vX *= friction;
      this.vY += gravity;
    }
  };
  var Alex = new Player(1,1);
}