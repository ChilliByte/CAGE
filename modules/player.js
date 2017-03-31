//Depends on modules projectile and input
if(modules.indexOf("projectile") == -1) {
  throw "Dependancy Error: Module projectile is required for Module player";
} else if(modules.indexOf("input") == -1) {
  throw "Dependancy Error: Module input is required for Module player";
} else {
  //Push "player" to the list of included modules.
  modules.push("player");
  
  //Player is a projectile with max XY velocity, friction and input-based velocity
  Player = class Player extends Projectile {
    constructor(x,y,controls,sprite) {
      super(x,y,1,2,10,0,true);
      this.controls = controls;
      this.vXmax = (1/6)*u;
      this.vYmax = (1/4)*u;
      this.friction = BoxFriction;
      this.isJumping = false;
      this.sprite = sprite;
      this.health = 100;
      this.playerNumber = game.players.length;
      game.players.push(this);
    } 
    
    static updateAll(multiplier) {
      var i = game.players.length;
      while(i--){
        game.players[i].update(multiplier);
      }
    }
    
    static drawAll() {
      var i = game.players.length;
      while(i--){
        game.players[i].draw();
      }
    }
    
    static moveAll(x,y) {
      var i = game.players.length;
      while(i--){
        game.players[i].x = x*u;
        game.players[i].y = y*u;
      }
    }
    
    
    static getLeader() {
      var i = game.players.length;
      var leader = game.players[0];
      while(i--){
        if(game.players[i].x > leader.x) {
          leader = game.players[i];
        }
      }
      return leader;
    }
    
    static scroll(x) {
      var i = game.players.length;
      while(i--){
        game.players[i].x -= x;
      }
    }
    //Polymorphic routine, called on every dynamic object every frame
    //Checks keys pressed, moves and checks collisions with all items in the current level
    //Dir contains a direction, or null if there is no collision. 
    update(multiplier) {
      if(this.y > 20*u) {
        this.kill();
        return;
      }
      this.checkKeys(multiplier);
      this.move(multiplier);
      var dir = game.levels[currentLevel].colCheck(this);
      this.checkDir(dir);
    }
    
    kill() {
      game.levels[currentLevel].reset();
      this.x = u;
      this.y = u;
      this.w = u;
      this.h = 2*u;
      this.vX = 0;
      this.vY = 0;
      this.health = 100;
    }
    
    draw() {
      this.sprite.draw(this);
    }
    
    checkKeys(multiplier) {
      if (keys[this.controls.left]) {
          // left arrow
          if (this.vX > -this.vXmax) {
            if(!this.isJumping) {
              this.vX -= this.vXmax/4;
            } else {
              this.vX -= this.vXmax* (1/8);
            }
          }
      }
      if (keys[this.controls.right]) {
        // right arrow
        if (this.vX < this.vXmax) {
            if(!this.isJumping) {
              this.vX += this.vXmax/4;
            } else {
              this.vX += this.vXmax * (1/8);
            }
        }
      }
      if (keys[this.controls.up]) {
        if (!this.isJumping && this.vY <= 0) {
          this.vY -= this.vYmax/5;
          if(this.vY < -this.vYmax) {
            this.isJumping = true;
          }
        }
      }
      this.vX *= Math.pow(this.friction,multiplier);
      this.vY += gravity * multiplier;
    }
    
    checkDir(dir) {
      if(dir.indexOf("b") != -1) {
        this.isJumping = false;
      }
      if(dir.indexOf("t") != -1) {
        this.vY = 0;
      }
      if(dir.indexOf("Ice") != -1) {
        this.friction = IceFriction;
      } else if(dir.indexOf("Platform") != -1) {
        this.friction = BoxFriction;
      }
    }
    
    hit(damage) {
      this.health -= damage;
      if(this.health <= 0) {
        this.kill();
      }
    }
  };
  Player.type = "dynamics";
}

console.log("Player.js Loaded");