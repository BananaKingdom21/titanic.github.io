//cool playGame variable
var playGame = 0

//button thing stuff
var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");

startButton.onclick = function () {playGame = 1;}
resetButton.onclick = function () {reset(); playGame = 1;}

//super cool canvas stuff
var supercoolcanvas = document.getElementById("myCanvas");
var ctx = supercoolcanvas.getContext("2d");

//image stuff
var boat = document.getElementById("boat");
var water = document.getElementById("water");
var icecube = document.getElementById("ice");
var earth = document.getElementById("land");

//control mouvement titanic
var boatX = 400;
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
 w1:400 *2,
 w2:280 *3,
 w3:320 *3,
 w4:520 *2,
 w5:600 *3,
 w6:600 *3,
}
var tallIce = {
 t1:420,
 t2:560,
 t3:630,
 t4:840,
 t5:770,
 t6:770,
}
  var Ice = {
   y1:-400 - tallIce.t1 / 2, x1:400 - wideIce.w1 / 2,
   y2:-770 - tallIce.t2 / 2, x2:170 - wideIce.w2 / 2,
   y3:-900 - tallIce.t3 / 2, x3:650 - wideIce.w3 / 2,
   y4:-1300 - tallIce.t4 / 2, x4:300 - wideIce.w4 / 2, 
   y5:-1700 - tallIce.t5 / 2, x5:500 - wideIce.w5 / 2,
   y6:-2100 - tallIce.t6 / 2, x6:240 - wideIce.w6 / 2
};
var Land = -3600;

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
//reset thing 
function reset () {
 boatX = 200;
 boatMoveSide = 0;
 side = undefined;
 wideIce.w1 = 400 *2;
 wideIce.w2 = 280 *3;
 wideIce.w3 = 320 *3;
 wideIce.w4 = 520 *2;
 wideIce.w5 = 600 *3;
 wideIce.w6 = 600 *3;
 tallIce.t1 = 420;
 tallIce.t2 = 560;
 tallIce.t3 = 630;
 tallIce.t4 = 840;
 tallIce.t5 = 770;
 tallIce.t6 = 770;
 Ice.y1 = -400 - tallIce.t1 / 2;
 Ice.x1 = 400 - wideIce.w1 / 2;
 Ice.y2 = -770 - tallIce.t2 / 2;
 Ice.x2 = 170 - wideIce.w2 / 2;
 Ice.y3 = -900 - tallIce.t3 / 2;
 Ice.x3 = 650 - wideIce.w3 / 2;
 Ice.y4 = -1300 - tallIce.t4 / 2;
 Ice.x4 = 300 - wideIce.w4 / 2;
 Ice.y5 = -1700 - tallIce.t5 / 2;
 Ice.x5 = 500 - wideIce.w5 / 2;
 Ice.y6 = -2100 - tallIce.t6 / 2;
 Ice.x6 = 240 - wideIce.w6 / 2;
 Land = -1800;
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
icething1(Ice.x1, Ice.y1, wideIce.w1, tallIce.t1);

//Ice2
icething2(Ice.x2, Ice.y2, wideIce.w2, tallIce.t2);

//Ice3
icething3(Ice.x3, Ice.y3, wideIce.w3, tallIce.t3);
    
//Ice4
icething4(Ice.x4, Ice.y4, wideIce.w4, tallIce.t4);

//Ice5
icething5(Ice.x5, Ice.y5, wideIce.w5, tallIce.t5);

//Ice6
icething6(Ice.x6, Ice.y6, wideIce.w6, tallIce.t6);
    
//land
ctx.drawImage(earth, 0, Land - 250, 800, 250);
  
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
    ctx.drawImage(boat, boatX - 250, 400, 500, 400);
    
   //cool dev circle thing
    fill("rgb(0, 150, 50)");
    circle(boatX, 400, 5);

//detect collision stuff
  if(boatX - 20 <=0){playGame = 0;}
  
  if(boatX + 20 >=800){playGame = 0;}
      
if(Ice.y1 +100 >=550 && Ice.y1 -100 <=500 && boatX +20 >=200 && boatX <=600){console.log("1");playGame = 0;}
    
if(Ice.y2 +100 >=550 && Ice.y2 -100 <=500 && boatX +20 >=0 && boatX <=300){console.log("2");playGame = 0;}
  
if(Ice.y3 +100 >=550 && Ice.y3 -100 <=500 && boatX +20 >=500 && boatX <=800){console.log("3");playGame = 0;}

if(Ice.y4 +100 >=550 && Ice.y4 -100 <=500 && boatX +20 >=0 && boatX <=550){console.log("4");playGame = 0;}
    
if(Ice.y5 +100 >=550 && Ice.y5 -100 <=500 && boatX +20 >=190 && boatX <=800){console.log("5");playGame = 0;}
    
if(Ice.y6 +100 >=550 && Ice.y6 -100 <=500 && boatX +20 >=0 && boatX <=570 ){console.log("6");playGame = 0;}

//Hit Land
if(Land >=-150){
    stroke("rgb(82, 82, 82)");
    fill("rgb(120, 120, 120)");
    rectangle(200,100,400,150);
  
    fill("rgb(0, 0, 0)");
    ctx.font = "30px Arial";
    text("New-York",350,120);
    ctx.font = "15px Arial";
    text("Le Titanic c’est rendu au port",300,150);
  
  playGame = 0;
}
}
}
requestAnimationFrame(gameCode);

