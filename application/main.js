function reset(){
  chrome.app.window.getAll()[0].outerBounds.width  = 200;
  chrome.app.window.getAll()[0].outerBounds.height = 200;
  chrome.app.window.getAll()[0].outerBounds.left = screen.availWidth - 200;
  chrome.app.window.getAll()[0].outerBounds.top = screen.availHeight - 200;
}

window.onload = function() {
  console.log("The Flingy app has loaded.");
  reset();
};