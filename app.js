var playGame = 0;

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

//control mouvement titanic
var boatX = 200;
var boatMoveSide = 0;
var side = undefined;

function boatMove (event) {
side = event.key;
}
function boatStop () {
boatMoveSide = 0;
}

//starting position stuff
  var Ice = {
y1:-200, x1:400,
y2:-385, x2:170,
y3:-450, x3:650,
y4:-650, x4:300,
y5:-850, x5:500,
y6:-1050, x6:240,
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
ctx.drawImage(water, 0, 0, 800, 800);

//Icebergs
fill("rgb(0, 200, 200)");
stroke("rgb(0,150,150)");
strokeWeight(10);

//Ice1
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
    if (side === "ArrowLeft") {
        boatMoveSide = 1;
        }
    if (side === "ArrowRight") {
        boatMoveSide = 2;
        }
    if (boatMoveSide === 1) {
        boatX = boatX - 3;
        }
    if (boatMoveSide === 2) {
        boatX = boatX + 3;
        }
    if (boatMoveSide === 0) {
        boatX = boatX - 0
        }
    ctx.drawImage(boat, boatX - 200, 200);

//Detect Collision
  if(boatX <=0){cancelAnimationFrame(gameCode);}
  
  if(boatX >=800){cancelAnimationFrame(gameCode);}
      
if(Ice.y1 +180 >=630 && Ice.y1 -180 <=500 && boatX +8 >=200 && boatX -8 <=300){cancelAnimationFrame(gameCode);}
    
if(Ice.y2 +210 >=630 && Ice.y2 -210 <=500 && boatX +8 >=0 && boatX -8 <=300){cancelAnimationFrame(gameCode);}
  
if(Ice.y3 +210 >=630 && Ice.y3 -210 <=500 && boatX +8 >=250 && boatX -8 <=800){cancelAnimationFrame(gameCode);}

if(Ice.y4 +210 >=630 && Ice.y4 -210 <=500 && boatX +8 >=0 && boatX -8 <=550){cancelAnimationFrame(gameCode);}
    
if(Ice.y5 +210 >=630 && Ice.y5 -210 <=500 && boatX +8 >=95 && boatX -8 <=800){cancelAnimationFrame(gameCode);}
    
if(Ice.y6 +210 >=630 && Ice.y6 -210 <=500 && boatX +8 >=0 && boatX -8 <=570 ){cancelAnimationFrame(gameCode);}

//Hit Land
if(Land >=-150){
    stroke("rgb(82, 82, 82)");
    fill("rgb(120, 120, 120)");
    rectangle(75,100,500,150);
  
    fill("rgb(0, 0, 0)");
    ctx.font = "30px Arial";
    text("New-York",200,120);
    ctx.font = "15px Arial";
    text("Le Titanic c’est rendu au port",200,150);
  
  cancelAnimationFrame(gameCode);
}
}
}
requestAnimationFrame(gameCode);
