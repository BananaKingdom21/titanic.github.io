/*epic variables*/

var loopTimer = 1;
var gamePlay = 0;
var button = document.querySelector("button");
var gameAreajs = document.getElementById("gameArea");

gameAreajs.textContent = "hello";

/*game stuff*/

//Where game starts.
function StartTheGame () {
  gamePlay = gamePlay + 1;
}


button.onclick = function () {
  gameAreajs.innerHTML = "";
}

