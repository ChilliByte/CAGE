//Key Game Variables - see document for definitions
var canvas,c,
tilesX = 40,
tilesY = 20,
pixelsPerTile = 100,
u = pixelsPerTile,
currentTime = 0,
oldTime = 0,
delta = 0,
keys = [],
modules = [],
players = [],
totalModules,
currentLevel = 0,
totalLevels,
normalGravity = 0.01*u,
BoxFriction = 0.9,
IceFriction = 0.97,
gravity = normalGravity;


//Function to initialize game. Finds the canvas, sets its size, and calls the render loop, if levels exist to render.
window.onload = function() {
  console.log("The app has loaded.");
  reset();
  
  canvas = document.getElementById("gameCanvas");
  c = canvas.getContext("2d");
  canvas.height = tilesY * u;
  canvas.width = tilesX * u;
  
  c.imageSmoothingEnabled = false;
  
  totalModules = scriptCount("modules");
  totalLevels = scriptCount("levels");
  
  //If there are level script files loaded, AND if they are added to the levels array correctly, start the game.
  if((totalLevels > 0) && (levels.length > 0)) {
    render();
  }
};

//Reset sets the size and position of the Chrome Window.
function reset(){
  chrome.app.window.getAll()[0].outerBounds.width  = screen.availWidth;
  chrome.app.window.getAll()[0].outerBounds.height = screen.availHeight;
  chrome.app.window.getAll()[0].outerBounds.left =  0;
  chrome.app.window.getAll()[0].outerBounds.top =  0;
}

//Loops through the included <script> tages and returns all that are in a folder `type`
function scriptCount(type) {
  var len = 0;
  var scripts = document.getElementsByTagName("script");
  for(var i = 0; i < scripts.length;i++) {
    if(scripts[i].src.split("/")[3] == type) {
      len++;
    }
  }
  return len;
}

console.log("Main.js Loaded");