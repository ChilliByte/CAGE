//Request Animation Frame Shim/Polyfill
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

game = {
  debug: false,
  paused: true,
  levels:[],
  players:[],
  hud:[],
  pause: function() {
    game.paused = true;
  },
  play: function() {
    game.paused = false;
  },
  kill: function() {
    render = function() {return null;};
  }
};

function render() {
  currentTime = new Date().getTime();
  delta = currentTime - oldTime;
  oldTime = currentTime;
  //multiplier = delta/16.6;
  multiplier = 1;
  
  if(!game.paused) {
    //First update all of the X and Y positions
    game.levels[currentLevel].update(multiplier);
    Player.updateAll(multiplier);
  }
  
    //Clear The Last Frame
    c.clearRect(0, 0, 40*u, 20*u);
    
    //Then Draw everything
    game.levels[currentLevel].draw();
    Player.drawAll();
    HUDElements.drawAll();
  
  
  if(game.debug) {
    debug();
  }
  //Call the next frame
  requestAnimationFrame(render);
}

console.log("Game.js Loaded");