/*epic variables*/

var loopTimer = 1;
var gamePlay = 0;
var buttonStart = document.getElementById("StartGameButton");
var gameAreaJs = document.getElementById("gameArea");

/*game stuff*/

//Where game starts.
function StartTheGame () {
  game = game + 1;
}

buttonStart.addEventListener("click", StartTheGame);

//Where game is working.
function game () {
  
  gameAreaJs.innerHTML = test;
  
  
  requestAnimationFrame(game);
}
//Where game is executed.
while (loopTimer > 0) {
  
  loopTimer = loopTimer + 1;
  
if (gamePlay = 1) {
    requestAnimationFrame(game);
    }
}

