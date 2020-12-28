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
var wideIce = {
 w1:400 *4,
 w2:280 *4,
 w3:320 *4,
 w4:520 *4,
 w5:600 *4,
 w6:600 *4,
}
  var Ice = {
y1:-400, x1:400 - wideIce.w1 / 2,
y2:-770, x2:170 - wideIce.w2 / 2,
y3:-900, x3:650 - wideIce.w3 / 2,
y4:-1300, x4:300 - wideIce.w4 / 2, 
y5:-1700, x5:500 - wideIce.w5 / 2,
y6:-2100, x6:240 - wideIce.w6 / 2
};

var Land = -1800;
var TitanicX = 200;

//icething code stuff
function icething1 (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
function icething2 (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
function icething3 (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
function icething4 (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
function icething5 (x, y, width, height) {
  ctx.drawImage(icecube, x, y, width, height);
}
function icething6 (x, y, width, height) {
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
icething1(Ice.x1, Ice.y1, wideIce.w1, 120 *4);

//Ice2
icething2(Ice.x2, Ice.y2, wideIce.w2, 160 *4);

//Ice3
icething3(Ice.x3, Ice.y3, wideIce.w3, 180 *4);
    
//Ice4
icething4(Ice.x4, Ice.y4, wideIce.w4, 240 *4);

//Ice5
icething5(Ice.x5, Ice.y5, wideIce.w5, 220 *4);

//Ice6
icething6(Ice.x6, Ice.y6, wideIce.w6, 220 *4);
    
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
    ctx.drawImage(boat, boatX - 150, 400, 500, 400);
    
    fill("rgb(0, 150, 50)");
    circle(boatX, 400, 5);

//Detect Collision
  if(boatX <=0){playGame = 0;}
  
  if(boatX + 60 >=800){playGame = 0;}
      
if(Ice.y1 +180 >=630 && Ice.y1 -180 <=500 && boatX +60 >=200 && boatX <=600){playGame = 0;}
    
if(Ice.y2 +210 >=630 && Ice.y2 -210 <=500 && boatX +60 >=0 && boatX <=300){playGame = 0;}
  
if(Ice.y3 +210 >=630 && Ice.y3 -210 <=500 && boatX +60 >=500 && boatX <=800){playGame = 0;}

if(Ice.y4 +210 >=630 && Ice.y4 -210 <=500 && boatX +60 >=0 && boatX <=550){playGame = 0;}
    
if(Ice.y5 +210 >=630 && Ice.y5 -210 <=500 && boatX +60 >=190 && boatX <=800){playGame = 0;}
    
if(Ice.y6 +210 >=630 && Ice.y6 -210 <=500 && boatX +60 >=0 && boatX <=570 ){playGame = 0;}

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
