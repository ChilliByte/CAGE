//Depends upon module "level"
if(modules.indexOf("level") == -1) {
  throw "DependancyError: Module level is required for Module box";
} else {
  
  modules.push("box");

  var boxCollisions = function(x) {
    for(var i = 0; i < this.length; i++) {
      var dir = Box.colCheck(x,this[i],true);
      if((dir !== null) && (friction !== boxFriction)) {
        friction = boxFriction;
      }
    }
  };
  
  window.addEventListener("load", function() {
    //Level constructor cannot be modified. Therefore, I must loop through every instance of the Level class
    //and add the properties required for this class. This, while inelegant, is required for modularity.
    for(var i = 0; i < levels.length; i++) {
        levels[i].boxes = [];
        levels[i].boxes.checkCollisions = boxCollisions;
    }
  });

  var Box = class Box {
    constructor(x, y, height, width) {
      this.x = x*u;
      this.y = y*u;
      this.h = height*u;
      this.w = width*u;
    }
    static draw(levelInt) {
      c.fillStyle = "#00D230";
      var boxArray = levels[levelInt].boxes;
      var boxArrayLength = levels[levelInt].boxes.length;
      for(var i = 0; i < boxArrayLength; i++) {
        c.fillRect(boxArray[i].x, boxArray[i].y, boxArray[i].w, boxArray[i].h);
      }
    }
    static colCheck(a,b,solid) {
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
                  if (solid) {
                      a.y += oY;
                      a.vY = 0;
                  }
              } else {
                  colDir = "b";
                  if (solid) {
                      a.y -= oY;
                      a.vY = 0;
                  }
              }
          } else {
              if (vX > 0) {
                  colDir = "l";
                  if (solid) {
                      a.x += oX;
                      a.vX = 0;
                  }
              } else {
                  colDir = "r";
                  if (solid) {
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
