var playGame = 0;

var button = document.querySelector("button");

button.onclick = function () {
  playGame = 1;
}

//super cool canvas stuff
var supercoolcanvas = document.getElementById("myCanvas");
var ctx = supercoolcanvas.getContext("2d");

//image stuff
var boat = document.getElementById("boat");
var water = document.getElementById("water");
var icecube = document.getElementById("ice");

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

//iceberg image stuff
function icething (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
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

//Ice1
icething(Ice.x1, Ice.y1, 100, 180);

//Ice2
icething(Ice.x2, Ice.y2, 300, 210);

//Ice3
icething(Ice.x3, Ice.y3, 550, 210);
    
//Ice4
icething(Ice.x4, Ice.y4, 550, 210);

//Ice5
icething(Ice.x5, Ice.y5, 705, 210);

//Ice6
icething(Ice.x6, Ice.y6, 570, 210);
    
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
        boatX = boatX - 5;
        }
    if (boatMoveSide === 2) {
        boatX = boatX + 5;
        }
    if (boatMoveSide === 0) {
        boatX = boatX - 0
        }
    ctx.drawImage(boat, boatX, 200, 120, 180);

//Detect Collision
  if(boatX <=0){playGame = 0;}
  
  if(boatX >=800){playGame = 0;}
      
if(Ice.y1 +180 >=630 && Ice.y1 -180 <=500 && boatX +8 >=200 && boatX -8 <=300){playGame = 0;}
    
if(Ice.y2 +210 >=630 && Ice.y2 -210 <=500 && boatX +8 >=0 && boatX -8 <=300){playGame = 0;}
  
if(Ice.y3 +210 >=630 && Ice.y3 -210 <=500 && boatX +8 >=250 && boatX -8 <=800){playGame = 0;}

if(Ice.y4 +210 >=630 && Ice.y4 -210 <=500 && boatX +8 >=0 && boatX -8 <=550){playGame = 0;}
    
if(Ice.y5 +210 >=630 && Ice.y5 -210 <=500 && boatX +8 >=95 && boatX -8 <=800){playGame = 0;}
    
if(Ice.y6 +210 >=630 && Ice.y6 -210 <=500 && boatX +8 >=0 && boatX -8 <=570 ){playGame = 0;}

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
  
  playGame = 0;
}
}
}
requestAnimationFrame(gameCode);
