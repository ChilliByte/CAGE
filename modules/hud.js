modules.push("HUD");
var HUDElementList = [];
var HUDElements = class HUDElements {
  static drawAll() {
    var i = HUDElementList.length;
    while(i--) {
      HUDElementList[i].draw();
    }
  }
};

var HUDBar = class HUDBar {
  constructor(x,y,w,h,bgcol,textcol,max,getValue) {
    this.x = x*u;
    this.y = y*u;
    this.w = w*u;
    this.h = h*u;
    this.bgCol = bgcol;
    this.textCol = textcol;
    this.maxVal = max;
    this.getVal = getValue;
    HUDElementList.push(this);
  }
  
  draw() {
    var num = null; 
    if(!game.paused) {
      num = this.getVal();
    } 
    if(num !== null) {
      var width = (num/this.maxVal)*this.w;
      c.fillStyle = this.bgCol;
      c.strokeRect(this.x,this.y,this.w,this.h);
      c.fillRect(this.x,this.y,width,this.h);
      c.font = '5em Calibri';
      c.fillStyle = this.textCol;
      c.fillText(num.toString(), this.x+10, this.y+65);
    }
  }
};