var xSpan = document.getElementById("x"),
    ySpan = document.getElementById("y"),
    vxSpan = document.getElementById("vx"),
    vySpan = document.getElementById("vy"),
    ijSpan = document.getElementById("ij"),
    loSpan = document.getElementById("lo"),
    lxSpan = document.getElementById("lx"),
    fpSpan = document.getElementById("fp");
    
function debug() {
  xSpan.innerText = players[0].x;
  ySpan.innerText = players[0].y;
  vxSpan.innerText = players[0].vX;
  vySpan.innerText = players[0].vY;
  ijSpan.innerText = players[0].isJumping;
  loSpan.innerText = levels[currentLevel].offset;
  lxSpan.innerText = levels[currentLevel].offset + players[0].x;
  fpSpan.innerText = Math.round(1000/delta);
}