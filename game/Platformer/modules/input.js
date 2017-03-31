modules.push("input");

window.addEventListener("load",function() {
  canvas.addEventListener("mousedown", getPosition, false);

  function getPosition(event) {
    evX = event.x;
    evY = event.y;
    evX -= canvas.offsetLeft;
    evY -= canvas.offsetTop;
    return [evX,evY];
  }
});

document.body.addEventListener("keydown", function(e) {
  if ((!keys[27]) && (e.keyCode == 27)) {
    if(!game.paused) {
      game.pause();
      pause.style.display = "block";
    } else {
      game.play();
      pause.style.display = "none";
    }
  }
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

console.log("Input.js Loaded");