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
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});