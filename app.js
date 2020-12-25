
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

//Random Fact
var Fact = random(1,16);

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

//Facts
var FunFacts = function(){
textAlign(CENTER,CENTER);
fill(20, 0, 0);
textSize(20);

if(Fact >0 && Fact <2){
text("La vitesse maximale du Titanic était de 23knots.",0,-30,400,100); }

if(Fact >=2 && Fact <3){
text("Le Titanic avait un jumeau l’Olympic.",0,-30,400,100); }

if(Fact >=3 && Fact <4){
text("Il y avait 3 cuisines sur le Titanic.",0,-30,400,100); }

if(Fact >=4 && Fact <5){
text("Il y avait seulement 20 canots de sauftage sur le Titanic mais il aurait dû en avoir 40.",0,-30,400,100); }

if(Fact >=5 && Fact <6){
  text("2 personnes sont mort en construisant le Titanic.",0,-30,400,100); }  

if(Fact >=6 && Fact <7){
text("Edward Smith était le capitaine du Titanic quand il a couler.",0,-30,400,100); }

if(Fact >=7 && Fact <8){
text("Le RMS Carpathia avait transporté les survivants à New-York.",0,-30,400,100); } 

if(Fact >=8 && Fact <9){
text("Le Titanic a reçu 6 avertissements d’icebergs durant le voyage tragic.",0,-30,400,100); }

if(Fact >=9 && Fact <10){
text("2 des 9 chiens sur le Titanic on survécu.",0,-30,400,100); }

if(Fact >=10 && Fact <11){
text("Il y avait 885 personnes dans l’équipage du Titanic",0,-30,400,100); }

if(Fact >=11 && Fact <12){
text("Le Titanic brulait 600tonnes de charbon tous les jours.",0,-30,400,100); }

if(Fact >=12 && Fact <13){
text("Le Titanic mesurait 269mètres de longeur.",0,-30,400,100); }

if(Fact >=13 && Fact <14){
text("Il y avait une piscine sur le Titanic.",0,-30,400,100);}

if(Fact >=14 && Fact <15){
text("RMS veut dire <<Royal-Mail-Ship>>.",0,-30,400,100); }  

if(Fact >=15 && Fact <16){
text("Le Titanic a coulé entre le 14 et 15 avril 1912.",0,-30,400,100); }   
};
FunFacts();

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
