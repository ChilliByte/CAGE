modules.push("ai");

function NoAI() {
  return;
}

function Static() {
  this.vX = 0;
  this.vY = 0;
}

function LinearAI() {
  this.vX = this.aiData.vX;
}

function PatrolAI() {
  if(this.aiData.dir == 1) {
    this.vX = this.aiData.vX;
  }
  if(this.aiData.dir == -1) {
    this.vX = -this.aiData.vX;
  }
  var offset = levels[currentLevel].offset;
  if(this.x+offset <= this.aiData.x1*u) {
    this.aiData.dir = 1;
  }
  if(this.x+offset >= (this.aiData.x2*u) - this.w) {
    this.aiData.dir = -1;
  }
}

function VerticalPatrolAI() {
  this.vY = this.aiData.dir * this.aiData.vY;
  this.vY -= gravity - 1;

  if(this.y <= this.aiData.y1*u) {
    this.aiData.dir = 1;
  }
  if(this.y >= (this.aiData.y2*u)) {
    this.aiData.dir = -1;
  }
}

function Boss1AI() {
  if(!this.locked) {
    doorArray[0].close();
    this.aiData.locked = true;
  }
  if(Player.getLeader().x < 0) {
    Player.getLeader().x = 0;
  }
  
  if(!this.aiData.isJumping) {
    this.aiData.isJumping = false;
  }
  if(levels[currentLevel].offset == 4000) {
    w1boss.scrollLock = true;
  }
  if(this.aiData.health === 0) {
    doorArray[0].open();
    doorArray[1].open();
    w1boss.scrollLock = false;
    this.kill();
    bossPlat.aiData.x1 = 41.05;
    bossPlat.aiData.x2 = 79.95;
  }
  if(this.aiData.stage === undefined && this.aiData.locked) {
    bossMob.aiData.stage = 1;
    if(w1boss.dynamics.length > 2) {
      w1boss.dynamics.length = 2;
    }
    setTimeout(function(){
      bossMob.aiData.enemies = 1;
      bossMob.aiData.dead = 0;
    },2000);
  }
  if((this.aiData.stage === 1) && (this.aiData.enemies === 1)) {
    levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:8,dir:-1},function(){bossMob.aiData.dead++; this.kill();}));
    this.aiData.enemies = 0;
  }
  if((this.aiData.stage === 1) && (this.aiData.dead === 1)) {
    this.aiData.enemies = 2;
    this.aiData.stage = 2;
  }
  if((this.aiData.stage === 2) && (this.aiData.enemies > 0)) {
    setTimeout(function(){
      levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:15,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
      setTimeout(function(){
        levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:15,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
      },1000);
    },1000);
    this.aiData.enemies = 0;
  }
  if((this.aiData.stage === 2) && (this.aiData.dead === 3)) {
    this.aiData.enemies = 4;
    this.aiData.stage = 3;
  }
  if((this.aiData.stage === 3) && (this.aiData.enemies > 0)) {
    setTimeout(function(){
      levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
      setTimeout(function(){
        levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
        setTimeout(function(){
          levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
          setTimeout(function(){
            levels[currentLevel].dynamics.push(new Mob(32,16,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
          },1000);
        },1000);
      },1000);
    },1000);
    this.aiData.enemies = 0;
  }
  if((this.aiData.stage === 3) && (this.aiData.dead === 7)) {
    this.aiData.enemies = 8;
    this.aiData.stage = 4;
    bossPlat.aiData.vX = 4;
  }
  if((this.aiData.stage === 4) && (this.aiData.enemies > 0)) {
    setTimeout(function(){
      levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
      setTimeout(function(){
        levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:1},function(){bossMob.aiData.dead++;this.kill();}));
        setTimeout(function(){
          levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
          setTimeout(function(){
            levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:1},function(){bossMob.aiData.dead++;this.kill();}));
            setTimeout(function(){
              levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
              setTimeout(function(){
                levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:1},function(){bossMob.aiData.dead++;this.kill();}));
                setTimeout(function(){
                  levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:-1},function(){bossMob.aiData.dead++;this.kill();}));
                  setTimeout(function(){
                    levels[currentLevel].dynamics.push(new Mob(bossMob.x/u,14,1,1,PatrolAI,{dmg:5,x1:40.05,x2:73.95,vX:20,dir:1},function(){bossMob.aiData.dead++;this.kill();}));
                  },750);
                },750);
              },750);
            },750);
          },750);
        },750);
      },750);
    },2500);
    this.aiData.enemies = 0;
  }
  if((this.aiData.stage === 4) && (this.aiData.dead === 15)) {
    this.aiData.enemies = 1;
    this.aiData.stage = 5;
    bossPlat.aiData.dir = 1;
  }
  if(this.aiData.stage == 5) {
    if(bossPlat.x > 3199) {
      bossPlat.aiData.vX = 0;
      bossPlat.vY = -8;
      bossMob.x -= 4;
      if(bossPlat.y <= 600) {
        bossPlat.vY = 0;
        bossPlat.y = 600;
        bossPlat.aiData.vX = 4;
        this.aiData.stage = 6;
        this.aiData.x1 = 41.1;
        this.aiData.x2 = 71.95;
        this.aiData.vX = 10;
        this.aiData.dir = 1;
      }
    }
  }
  if(this.aiData.stage == 6) {
    if(bossMob.y < 1000) {
      bossMob.x -= 4;
    }
    if((Math.random() < 0.01) && (!this.aiData.isJumping)) {
      bossMob.vY = -25;
      this.aiData.isJumping = true;
    }
    //Patrol AI code. function cannot be used as context of "this" has changed
    if(this.aiData.dir == 1) {
      this.vX = this.aiData.vX;
    }
    if(this.aiData.dir == -1) {
      this.vX = -this.aiData.vX;
    }
    var offset = levels[currentLevel].offset;
    if(this.x+offset <= this.aiData.x1*u) {
      this.aiData.dir = 1;
    }
    if(this.x+offset >= (this.aiData.x2*u) - this.w) {
      this.aiData.dir = -1;
    }
  }
}

function Boss1Hit() {
  this.aiData.health -= 1;
}