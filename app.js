
//game stuff

var gameAreajs = document.getElementById("gameArea");
var ice1 = document.getElementById("gameIce1");
var playGame = 0;

var button = document.querySelector("button");

button.onclick = function () {
  gameAreajs.innerHTML = "<canvas id=mycanvas width="400" height="400"></canvas>";
  playGame = 1;
}

//super cool canvas stuff
var supercoolcanvas = document.getElementById("myCanvas");
var ctx = supercoolcanvas.getContext("2d");

//color stuff
var coloring = {
  red: "red"
}

//circle code stuff
function ellipse (x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  
}

//actuall game stuff
function gameCode () {
  requestAnimationFrame(gameCode);
  
  if (playGame === 1) {
    
    
      
      }  
}
requestAnimationFrame(gameCode);

//cool circle test
ellipse(200, 200, 100, coloring.red);
