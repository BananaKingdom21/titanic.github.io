
//game stuff

var gameAreajs = document.getElementById("gameArea");
var iceMove = 0;
var ice1 = document.getElementById("gameIce1");
var superCoolTestTimer = 0;

function gameCodeYay () {
  
  console.log(superCoolTestTimer);
  superCoolTestTimer = superCoolTestTimer++;
  if (superCoolTestTimer >= 999) {
    console.clear();
  }
  
  gameCodeYay();
}

var button = document.querySelector("button");

button.onclick = function () {
  gameAreajs.innerHTML = "";
  gameCodeYay();
}

