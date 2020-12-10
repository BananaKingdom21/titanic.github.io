/*epic variables*/

var loopTimer = 1;
var gamePlay = 0;
var buttonStart = document.getElementById("StartGameButton");
var gameAreajs = document.getElementById("gameArea");

/*game stuff*/

//Where game starts.
function StartTheGame () {
  game = game + 1;
}

buttonStart.onclick = function () {
  gameAreajs.innerHTML = "hello";
}
