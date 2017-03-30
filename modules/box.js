//Depends upon module "level"
if(modules.indexOf("level") == -1) {
  throw "DependancyError: Module level is required for Module box";
} else {
  //Push "box" to the list of modules included  
  modules.push("box");
  
  //Define the box Class
  var Box = class Box {
    constructor(x, y, width, height, solid) {
      this.x = x*u;
      this.y = y*u;
      this.h = height*u;
      this.w = width*u;
      this.s = solid;
    }
    
    draw() {
      c.fillStyle = "green";
      c.fillRect(this.x,this.y,this.w,this.h);
    }
    
    //Collision algorithm from somethinghitme.com
    static colCheck(a,b) {
      // get the vectors to check against
      var vX = (a.x + (a.w/ 2)) - (b.x + (b.w / 2)),
          vY = (a.y + (a.h / 2)) - (b.y + (b.h / 2)),
          // add the half widths and half heights of the objects
          hWidths = (a.w / 2) + (b.w / 2),
          hHeights = (a.h / 2) + (b.h / 2),
          colDir = null;
      // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
      if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
          // figures out on which side we are colliding (top, bottom, left, or right)
          var oX = hWidths - Math.abs(vX),
              oY = hHeights - Math.abs(vY);
          if (oX >= oY) {
              if (vY > 0) {
                  colDir = "t";
                  //If the second item is solid, move the first outside of it.
                  if (b.s) {
                      a.y += oY;
                      a.vY = 0;
                  }
              } else {
                  colDir = "b";
                  if (b.s) {
                      a.y -= oY;
                      a.vY = 0;
                  }
              }
          } else {
              if (vX > 0) {
                  colDir = "l";
                  if (b.s) {
                      a.x += oX;
                      a.vX = 0;
                  }
              } else {
                  colDir = "r";
                  if (b.s) {
                      a.x -= oX;
                      a.vX = 0;
                  }
              }
          }
      }
      return colDir;
    }
  };
}

console.log("Box.js Loaded");