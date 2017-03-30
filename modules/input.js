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
  if ((!keys[80]) && (e.keyCode == 80)) {
    if(!game.paused) {
      game.pause();
    } else {
      game.play();
    }
  }
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

console.log("Input.js Loaded");