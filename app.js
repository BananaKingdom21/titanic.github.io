/*epic variables*/

var loopTimer = 1;
var gamePlay = 0;
let button = document.querySelector("button");
let gameAreajs = document.getElementById("gameArea");

/*game stuff*/

//Where game starts.
function StartTheGame () {
  gamePlay = gamePlay + 1;
}

gameAreajs.innerHTML = "hello";

button.onclick = function () {
  gameAreajs.innerHTML = "hello";
}

