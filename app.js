/*epic variables*/

var loopTimer = 1;
var gamePlay = 0;
let buttonStart = document.getElementById("StartGameButton");
let gameAreajs = document.getElementById("gameArea");

/*game stuff*/

//Where game starts.
function StartTheGame () {
  gamePlay = gamePlay + 1;
}

buttonStart.onclick = function () {
  gameAreajs.innerHTML = "hello";
}
