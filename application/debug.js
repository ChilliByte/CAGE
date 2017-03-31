var xSpan = document.getElementById("x"),
    ySpan = document.getElementById("y"),
    vxSpan = document.getElementById("vx"),
    vySpan = document.getElementById("vy"),
    ijSpan = document.getElementById("ij"),
    loSpan = document.getElementById("lo"),
    lxSpan = document.getElementById("lx"),
    fpSpan = document.getElementById("fp");
    
function debug() {
  xSpan.innerText = game.players[0].x;
  ySpan.innerText = game.players[0].y;
  vxSpan.innerText = game.players[0].vX;
  vySpan.innerText = game.players[0].vY;
  ijSpan.innerText = game.players[0].isJumping;
  loSpan.innerText = game.levels[currentLevel].offset;
  lxSpan.innerText = game.levels[currentLevel].offset + players[0].x;
  fpSpan.innerText = Math.round(1000/delta);
}