window.addEventListener("load",function() {
  document.querySelector("#menu button:first-of-type").onclick = function() {
    new Player(1,1,{left:65,right:68,up:32,open:83},AlexSprite);
    game.play();
    document.getElementById('menu').style.display='none';
  };
  document.querySelector("#menu button:last-of-type").onclick = function() {
    new Player(1,1,{left:65,right:68,up:32,open:83},MaxSprite);
    game.play();
    document.getElementById('menu').style.display='none';
  };
});