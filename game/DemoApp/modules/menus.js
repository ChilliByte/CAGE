window.addEventListener("load",function() {
  document.querySelector("#splash button:first-of-type").onclick = function() {
    document.getElementById('splash').style.display='none';
    new Player(1,1,{left:65,right:68,up:32,open:83},RedSprite);
    game.play();
  };
});