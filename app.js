
//game stuff

var gameAreajs = document.getElementById("gameArea");
var iceMove = 0;
var ice1 = document.getElementById("gameIce1");

function gameCodeYay () {
  ice1.style.top = iceMove + 5 +"px";
  
  gameCodeYay();
}

var button = document.querySelector("button");

button.onclick = function () {
  gameAreajs.innerHTML = "";
  gameCodeYay();
}

