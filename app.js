
//game stuff

var gamePlay = 0;

function StartTheGame () {
  gamePlay = gamePlay + 1;
}

var gameAreajs = document.getElementById("gameArea");
var button = document.querySelector("button");

button.onclick = function () {
  gameAreajs.innerHTML = "";
}

