
var playGame = 0;

//moving titanic stuff
var TitanicMouve = event.keyCode;

var button = document.querySelector("button");

button.onclick = function () {
  playGame = 1;
}

//super cool canvas stuff
var supercoolcanvas = document.getElementById("myCanvas");
var ctx = supercoolcanvas.getContext("2d");

//titanic stuff
var boat = document.getElementById("boat");
var water = document.getElementById("water");

//starting position stuff
  var Ice = {
y1:-200, x1:200,
y2:-385, x2:85,
y3:-450, x3:325,
y4:-650, x4:150,
y5:-850, x5:250,
y6:-1050, x6:120,
};
var Land = -1800;
var TitanicX = 200;

//circle code stuff
function circle (x, y, size) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}
//rectangle code stuff
function rectangle (x, y, width, height) {
  ctx.beginPath();
  ctx.fillRect(x, y, width, height);
}
//line color stuff
function stroke (color) {
  ctx.strokeStyle = color;
}
//color shape stuff
function fill (color) {
  ctx.fillStyle = color;
}
//word stuff
function text (text, x, y) {
  ctx.fillText(text, x, y);
}
//line biger stuff
function strokeWeight (size) {
ctx.lineWidth = size;
}

//actuall game stuff
function gameCode () {
  requestAnimationFrame(gameCode);
  
  if (playGame === 1) {

//background
    ctx.drawImage(water, 0, 0);

//Icebergs
fill("rgb(0, 200, 200)");
stroke("rgb(0,150,150)");
strokeWeight(10);

//Ice1
var Icy = function(){
circle(Ice.x1, Ice.y1, 200, 60);

circle(Ice.x1, Ice.y1 -20, 55);
circle(Ice.x1, Ice.y1 +10, 65);
circle(Ice.x1 -20, Ice.y1, 90);
circle(Ice.x1 +30, Ice.y1, 90);

//Ice2
circle(Ice.x2, Ice.y2 , 140, 70);

circle(Ice.x2, Ice.y2 -20, 55);
circle(Ice.x2, Ice.y2 +10, 55);
circle(Ice.x2 -20, Ice.y2, 70);
circle(Ice.x2 +20, Ice.y2 -10, 75);

//Ice3
circle(Ice.x3, Ice.y3, 115);

circle(Ice.x3, Ice.y3, 90);
circle(Ice.x3 +20, Ice.y3, 85);

//Ice4
circle(Ice.x4, Ice.y4, 165);

circle(Ice.x4, Ice.y4, 120);
circle(Ice.x4 +30, Ice.y4, 100);
circle(Ice.x4 +50, Ice.y4 -10, 75);
circle(Ice.x4 -40, Ice.y4 -10, 100);

//Ice5
circle(Ice.x5, Ice.y5, 185);

circle(Ice.x5, Ice.y5, 130);
circle(Ice.x5 -60, Ice.y5 -10, 90);
circle(Ice.x5 +80, Ice.y5 -10, 75);
circle(Ice.x5, Ice.y5, 70);

//Ice6
circle(Ice.x6, Ice.y6, 185);

circle(Ice.x6, Ice.y6, 130);
circle(Ice.x6 +60, Ice.y6 +10, 90);
circle(Ice.x6 -80, Ice.y6 +10, 85);
circle(Ice.x6, Ice.y6, 70);
};
Icy();

//land

//speed
var speed = 5;
Ice.y1 = Ice.y1 + speed;
Ice.y2 = Ice.y2 + speed;
Ice.y3 = Ice.y3 + speed;
Ice.y4 = Ice.y4 + speed;
Ice.y5 = Ice.y5 + speed;
Ice.y6 = Ice.y6 + speed;
Land = Land + speed;
  
//titanic stuff
ctx.drawImage(boat, boatX, boatY);

//Detect Collision
function hit (){
  
  if(mouseX <=1){cancelAnimationFrame(gameCode);}
  
  if(mouseX >=399){cancelAnimationFrame(gameCode);}
      
if(Ice.y1 +90 >=315 && Ice.y1 -90 <=250 && mouseX +4 >=100 && mouseX -4 <=300){cancelAnimationFrame(gameCode);}
    
if(Ice.y2 +105 >=315 && Ice.y2 -105 <=250 && mouseX +4 >=0 && mouseX -4 <=150){cancelAnimationFrame(gameCode);}
  
if(Ice.y3 +105 >=315 && Ice.y3 -105 <=250 && mouseX +4 >=250 && mouseX -4 <=400){cancelAnimationFrame(gameCode);}

if(Ice.y4 +105 >=315 && Ice.y4 -105 <=250 && mouseX +4 >=0 && mouseX -4 <=275){cancelAnimationFrame(gameCode);}
    
if(Ice.y5 +105 >=315 && Ice.y5 -105 <=250 && mouseX +4 >=95 && mouseX -4 <=400){cancelAnimationFrame(gameCode);}
    
if(Ice.y6 +105 >=315 && Ice.y6 -105 <=250 && mouseX +4 >=0 && mouseX -4 <=285 ){cancelAnimationFrame(gameCode);}
 
};
hit();

//Hit Land
if(Land >=-150){
  
Speed = 0;

    stroke(rgb(82, 82, 82));
    fill(rgb(120, 120, 120));
    rect(75,100,250,75);

    
    fill(rgb(0, 0, 0));
    ctx.font = "30px Arial";
    text("New-York",200,120);
    ctx.font = "15px Arial";
    text("Le Titanic c’est rendu au port",200,150);
}
requestAnimationFrame(gameCode);
