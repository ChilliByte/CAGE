/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

chrome.app.runtime.onLaunched.addListener(function() {
  var windowWidth = screen.availWidth;
  var windowHeight = screen.availHeight;
  chrome.app.window.create('index.html', {
    id: "mainWindow",
    outerBounds: { 
      width: windowWidth,
      height: windowHeight,
      left: 0,
      top: 0,
    },
    resizable: true,
    alwaysOnTop: false,
    frame:"chrome"
  });      
});
