modules.push("image");

var BlockColTile = class BlockColourTile {
  constructor(color) {
    this.col = color;
  }
  
  draw(x,y,w,h) {
    c.fillStyle = this.col;
    c.fillRect(x,y,w,h);
  }
};

var BlockColSprite = class BlockColourSprite {
  constructor(color) {
    this.col = color;
  }
  
  draw(obj) {
    c.fillStyle = this.col;
    c.fillRect(obj.x,obj.y,obj.w,obj.h);
  }
};

var Tile = class Tile {
  constructor(url,cx,cy,cw,ch) {
    this.img = new Image();
    this.img.src = url;
    this.cx = cx;
    this.cy = cy;
    this.cw = cw;
    this.ch = ch;
  }
  
  draw(x,y,w,h) {
    c.drawImage(this.img,this.cx,this.cy,this.cw,this.ch,x,y,w,h);
  }
};

//Draws an image at a fixed location in the level
var Sprite = class Sprite extends Tile {
  constructor(url,cx,cy,cw,ch,x,y,w,h, offsetFactor) {
    super(url,cx,cy,cw,ch);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetFactor = offsetFactor;
  }
  
  draw(offset) {
    var drawOffset = offset * this.offsetFactor;
    c.drawImage(this.img,this.cx,this.cy,this.cw,this.ch,this.x-drawOffset,this.y,this.w,this.h);
  }
};

var SpriteSet = class SpriteSet {
  constructor(images) {
    //Images is an array of background layers. images[0] is drawn at the top
    this.layers = images;
    this.layerCount = images.length;
  }
};

var Background = class Background extends SpriteSet {
  draw(offset) {
    var x = this.layerCount;
    while(x--) {
      this.layers[x].draw(offset);
    }
  }
};

var RepeatingTile = class RepeatingTile extends Tile {
  constructor(url) {
    super(url,0,0,0,0);
  }
  draw(x,y,w,h) {
    c.translate(x,y);
    var style = c.createPattern(this.img,"repeat");
    c.fillStyle = style;
    c.fillRect(0,0,w,h);
    c.translate(-x,-y);
  }
};

var noBg = {draw:function(){}};
var noFg = noBg;