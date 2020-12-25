
var ice1 = document.getElementById("gameIce1");
var playGame = 0;

var button = document.querySelector("button");

button.onclick = function () {
  playGame = 1;
}

//super cool canvas stuff
var supercoolcanvas = document.getElementById("myCanvas");
var ctx = supercoolcanvas.getContext("2d");

//color stuff
var coloring = {
  red: "red"
}

//circle code stuff
function ellipse (x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  
}
function rect (x, y, width, height) {
  ctx.beginPath();
  ctx.fillRect(x, y, width, height);
}

//actuall game stuff
function gameCode () {
  requestAnimationFrame(gameCode);
  
  if (playGame === 1) {
    
    var Ice = {
y1:-200, x1:200,
y2:-385, x2:85,
y3:-450, x3:325,
y4:-650, x4:150,
y5:-850, x5:250,
y6:-1050, x6:120,
};

//Land
var Land = -1800;

//Add Movement
draw = function() {
    //Water
  image(getImage("space/background"),0,0,400,400);

//Icebergs
fill(0, 200, 200);
stroke(0,150,150);
strokeWeight(10);

//Ice1
var Icy = function(){
ellipse(Ice.x1, Ice.y1, 200, 60);

ellipse(Ice.x1, Ice.y1 -20, 60, 50);
ellipse(Ice.x1, Ice.y1 +10, 70, 60);
ellipse(Ice.x1 -20, Ice.y1, 110, 70);
ellipse(Ice.x1 +30, Ice.y1, 110, 70);

//Ice2
ellipse(Ice.x2, Ice.y2 , 140, 70);

ellipse(Ice.x2, Ice.y2 -20, 50, 60);
ellipse(Ice.x2, Ice.y2 +10, 50, 60);
ellipse(Ice.x2 -20, Ice.y2, 50, 80);
ellipse(Ice.x2 +20, Ice.y2 -10, 70, 80);

//Ice3
ellipse(Ice.x3, Ice.y3, 160, 70);

ellipse(Ice.x3, Ice.y3, 90, 90);
ellipse(Ice.x3 +20, Ice.y3, 100, 70);

//Ice4
ellipse(Ice.x4, Ice.y4, 260, 70);

ellipse(Ice.x4, Ice.y4, 140, 100);
ellipse(Ice.x4 +30, Ice.y4, 80, 120);
ellipse(Ice.x4 +50, Ice.y4 -10, 70, 80);
ellipse(Ice.x4 -40, Ice.y4 -10, 120, 80);

//Ice5
ellipse(Ice.x5, Ice.y5, 300, 70);

ellipse(Ice.x5, Ice.y5, 150, 110);
ellipse(Ice.x5 -60, Ice.y5 -10, 90, 90);
ellipse(Ice.x5 +80, Ice.y5 -10, 100, 50);
ellipse(Ice.x5, Ice.y5, 70, 70);

//Ice6
ellipse(Ice.x6, Ice.y6, 300, 70);

ellipse(Ice.x6, Ice.y6, 150, 110);
ellipse(Ice.x6 +60, Ice.y6 +10, 90, 90);
ellipse(Ice.x6 -80, Ice.y6 +10, 100, 70);
ellipse(Ice.x6, Ice.y6, 70, 70);
};
Icy();

//land
image(getImage("cute/RampSouth"), 0, Land, 400, 400);

//Normal Speed 5 (Hard 8)
var speed = 5;
Ice.y1 = Ice.y1 + speed;
Ice.y2 = Ice.y2 + speed;
Ice.y3 = Ice.y3 + speed;
Ice.y4 = Ice.y4 + speed;
Ice.y5 = Ice.y5 + speed;
Ice.y6 = Ice.y6 + speed;
Land = Land + speed;
//Titanic
Titanic();

//Detect Collision
var hit = function(){
if(mouseX <=0){draw= function() {
    T = T+1; if(T >10){draw= function() {
    Start();
    };}};}
  
  if(mouseX >=400){draw= function() {
      T = T+1; if(T >10){draw= function() {
      Start();
      };}};}
      
if(Ice.y1 +90 >=315 && Ice.y1 -90 <=250 && mouseX +4 >=100 && mouseX -4 <=300){draw = function() {
    T = T+1; if(T >=20){draw= function() {Start(); };}};}
    
if(Ice.y2 +105 >=315 && Ice.y2 -105 <=250 && mouseX +4 >=0 && mouseX -4 <=150){draw = function() {
T = T+1; if(T >=20){draw= function() {Start();
};}};}
      
      }  
}
requestAnimationFrame(gameCode);

//cool circle test
ellipse(200, 200, 100, coloring.red);
