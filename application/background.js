/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

chrome.app.runtime.onLaunched.addListener(function() {
  var windowWidth = 200;
  var windowHeight = 200;
  chrome.app.window.create('index.html', {
    id: "mainWindow",
    outerBounds: { 
      width: windowWidth,
      height: windowHeight,
      left: screen.availWidth - windowWidth,
      top: screen.availHeight - windowHeight,
    },
    resizable: false,
    alwaysOnTop: true,
    frame:"none"
  });      
});