
//game stuff

var gameAreajs = document.getElementById("gameArea");
var ice1 = document.getElementById("gameIce1");
var playGame = 0;

var button = document.querySelector("button");

button.onclick = function () {
  gameAreajs.innerHTML = "";
  playGame = 1;
}

function gameCode () {
  requestAnimationFrame(gameCode);
  
  if (playGame === 1) {
    
    console.log("test");
      
      }  
}
requestAnimationFrame(gameCode);
