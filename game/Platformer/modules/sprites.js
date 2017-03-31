//Draws player depending on players' state
var PlayerSprite = class PlayerSprite {
  constructor(img,data) {
    this.img = new Image();
    this.img.src = img;
    this.d = data;
  }
  
  draw(player) {
    /* sw: Sprite Width
     * sh: Sprite Height
     * drx: Falling, Facing Right,X Co-ord
     * dry: Falling, Facing Right,Y Co-ord
     * dlx: Falling, Facing Left,X Co-ord
     * dly: Falling, Facing Left,Y Co-ord
     * urx: Jumping, Facing Right,X Co-ord
     * ury: Jumping, Facing Right,Y Co-ord
     * ulx: Jumping, Facing Left,X Co-ord
     * uly: Jumping, Facing Left,Y Co-ord
     * lbx: Skidding, facing left, X Co-ord     
     * lby: Skidding, facing left, Y Co-ord
     * rbx: Skidding, facing right, X Co-ord     
     * rby: Skidding, facing right, Y Co-ord
     * l1x: Walking Left, Frame 1, X Co-ord
     * l1y: Walking Left, Frame 1, Y Co-ord
     * l2x: Walking Left, Frame 2, X Co-ord
     * l2y: Walking Left, Frame 2, Y Co-ord
     * r1x: Walking Right, Frame 1, X Co-ord
     * r1y: Walking Right, Frame 1, Y Co-ord
     * r2x: Walking Right, Frame 2, X Co-ord
     * r2y: Walking Right, Frame 2, Y Co-ord
     * slx: Standing, Facing Left, X Co-ord
     * sly: Standing, Facing Left, Y Co-ord
     * srx: Standing, Facing Right, X Co-ord
     * sry: Standing, Facing Right, Y Co-ord
     * frn: Frame Number
     * afn: Animation Frame Number;
    */
    if((player.vY > 1) && (player.vX >= 0)) {
      c.drawImage(this.img,this.d.drx,this.d.dry,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    if((player.vY < -1) && (player.vX >= 0)){
      c.drawImage(this.img,this.d.urx,this.d.ury,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    
    if((player.vY > 1) && (player.vX < 0)) {
      c.drawImage(this.img,this.d.dlx,this.d.dly,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    if((player.vY < -1) && (player.vX < 0)){
      c.drawImage(this.img,this.d.ulx,this.d.uly,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    
    if((player.vX > 1) && (keys[player.controls.left])) {
      c.drawImage(this.img,this.d.lbx,this.d.lby,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    if((player.vX < -1) && (keys[player.controls.right])) {
      c.drawImage(this.img,this.d.rbx,this.d.rby,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    if((player.vX > 1)) {
      this.d.frn += Math.floor(100/delta);
      if(this.d.frn > 40) {
        this.d.afn++;
        this.d.frn -= 40;
      }
      if(this.d.afn % 2 === 0) {
        c.drawImage(this.img,this.d.r1x,this.d.r1y,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      } else {
        c.drawImage(this.img,this.d.r2x,this.d.r2y,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      }
      return;
    }
    if((player.vX < -1)) {
      this.d.frn += Math.floor(100/delta);
      if(this.d.frn > 40) {
        this.d.afn++;
        this.d.frn -= 40;
      }
      if(this.d.afn % 3 === 0) {
        c.drawImage(this.img,this.d.l1x,this.d.l1y,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      } else {
        c.drawImage(this.img,this.d.l2x,this.d.l2y,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      }
      return;
    }
    
    if(player.vX >= 0) {
      c.drawImage(this.img,this.d.srx,this.d.sry,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
    
    if(player.vX < 0) {
      c.drawImage(this.img,this.d.slx,this.d.sly,this.d.sw,this.d.sh,player.x,player.y,player.w,player.h);
      return;
    }
  }
};

var mobImg = new Image();
mobImg.src = "assets/Old enemies.png";
var MobSprite = class MobSprite extends PlayerSprite {
  static draw(mob) {
    if(mob.d === undefined) {
      mob.d = {
        img: mobImg,
        afn: 0,
        frn: 0
      };
    }
    mob.d.frn += Math.floor(100/delta);
    if(mob.d.frn > 40) {
      mob.d.afn++;
      mob.d.frn -= 40;
    }
    var mobDir = mob.aiData.dir,dirx;
    if(mobDir === undefined) {
      mobDir = -1;
    }
    var dirX = 56*(mobDir+1);
    var imgY = 0;
    if(currentLevel == 3) {
      imgY = 16;
    }
    if(mob.ai.name == "VerticalPatrolAI") {
      imgY = 48;
    }
    if(mob.ai.name == "Boss1AI") {
      imgY = 32;
    }
    switch(mob.d.afn % 5) {
      case(0):
        c.drawImage(mob.d.img,dirX,imgY,16,16,mob.x,mob.y,mob.w,mob.h);
        break;
      case(1):
        c.drawImage(mob.d.img,dirX+16,imgY,16,16,mob.x,mob.y,mob.w,mob.h);
        break;
      case(2):
        c.drawImage(mob.d.img,dirX+32,imgY,16,16,mob.x,mob.y,mob.w,mob.h);
        break;        
      case(3):
        c.drawImage(mob.d.img,dirX+48,imgY,16,16,mob.x,mob.y,mob.w,mob.h);
        break;
      case(4):
        c.drawImage(mob.d.img,dirX+64,imgY,16,16,mob.x,mob.y,mob.w,mob.h);
        break;
      }
  }
};

var dirt = new RepeatingTile("assets/dirt2.png");

var level1Bg = new Background([
  new Sprite("assets/sky2-100by20.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/sky.png",0,0,40,20,0,0,4000,2000,0)
]);
var level2Bg = new Background([
  new Sprite("assets/sky2-2.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/sky1-2.png",0,0,40,20,0,0,4000,2000,0)
]);

var level3Bg = new Background([
  new Sprite("assets/sky2-100by20.png",0,0,100,20,0,0,10000,2000,0.2),
  new Sprite("assets/dark sky-2.png",0,0,40,20,0,0,4000,2000,0)
]);
var level4Bg = new Background([
  new Sprite("assets/nightSky.png",0,0,40,20,0,0,4000,2000,0)
]);

var level1Fg = new Background([
  new Sprite("assets/levels-1.png",0,0,800,80,0,0,20000,2000,1)
]);

var level2Fg = new Background([
  new Sprite("assets/levels-2.png",0,0,800,80,0,0,20000,2000,1)
]);

var level3Fg = new Background([
  new Sprite("assets/levels-3.png",0,0,800,80,0,0,20000,2000,1)
]);


var level4Fg = new Background([
  new Sprite("assets/levels-4.png",0,0,800,80,0,0,20000,2000,1)
]);

var AlexSprite = new PlayerSprite("assets/spritesheetFinal.png",{
  sw: 25,
  sh: 50,
  drx: 0,
  dry: 50,
  dlx: 25,
  dly: 50,
  urx: 50,
  ury: 0,
  ulx: 75,
  uly: 0,
  lbx: 75,
  lby: 0,
  rbx: 50,    
  rby: 0,
  l1x: 75,
  l1y: 0,
  l2x: 25,
  l2y: 50,
  r1x: 50,
  r1y: 0,
  r2x: 0,
  r2y: 50,
  slx: 25,
  sly: 0,
  srx: 0,
  sry: 0,
  frn: 0,
  afn: 0
});

var MaxSprite = new PlayerSprite("assets/spritesheetFinal2.png",{
  sw: 25,
  sh: 50,
  drx: 25,
  dry: 50,
  dlx: 50,
  dly: 50,
  urx: 50,
  ury: 0,
  ulx: 0,
  uly: 50,
  lbx: 0,
  lby: 50,
  rbx: 50,    
  rby: 0,
  l1x: 0,
  l1y: 50,
  l2x: 50,
  l2y: 50,
  r1x: 50,
  r1y: 0,
  r2x: 25,
  r2y: 50,
  slx: 25,
  sly: 0,
  srx: 0,
  sry: 0,
  frn: 0,
  afn: 0
});

var coin = new Tile("assets/crate.png",0,0,100,100);