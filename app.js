var playPause = document.getElementsByTagName("button")[2];
var backward = document.getElementsByTagName("button")[3];
var forward = document.getElementsByTagName("button")[4];
window.onkeydown = function (event) {
  if (event.keyCode == 37) {
    backward.click();
  }
  if (event.keyCode == 39) {
    forward.click();
  }
  if (event.keyCode == 80) {
    playPause.click();
  }
};
