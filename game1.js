/*epic variables*/

var loopTimer = 1;
var gameplay = 0;
var buttonStart = document.getElementById("StartGameButton");
var gameAreaJs = document.getElementById("gameArea");

/*game stuff*/

//Where game starts.
function StartTheGame () {
  game = 1;
}

buttonStart.addEventListener("click", StartTheGame);

//Where game is working.
function game () {
  
  gameAreaJs.innerHTML = "";
  
  
  requestAnimationFrame();
}
//Where game is executed.
while (loopTimer > 0) {
  
  loopTimer = loopTimer + 1;
  
if (game = 1) {
    game();
    }
}
