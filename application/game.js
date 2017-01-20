//Request Animation Frame Shim/Polyfill
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//First update all of the X and Y positions
function update() {
    Alex.checkKeys();
    Alex.move();
    levels[currentLevel].boxes.checkCollisions(Alex);
}

//Then Draw everything
function render() {
  update();
  //Clear The Last Frame
  c.clearRect(0, 0, 40*u, 20*u);
  Box.draw(currentLevel);
  Alex.draw();
  requestAnimationFrame(render);
}
