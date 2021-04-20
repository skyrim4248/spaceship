var canvas;

var star = [];
var speed;

var player;

var obstacles = [],obstacles2 = [];
var obstacle,o2;

var coin,coin2;
var coinZ = -1000;
var coins = [],coins2 = [];
var noOfCoins;

var occur,occur2;

var pos = 0;
var zpos = 0;

var obstacleX = 0;
var obstacleX2 = 0;
var obstacleZ = -800;

var appear = false;

var a,a2,x;

var sx,sy,sz;

var desPx = 200;
var desPy = 100;

var distance;
var distCount = 0;

var coinsC;
var coinsCount = 0;

var final;

var checkpoint;
var cp;
var bodyRadius;

var planetName;
var name;

var exiting;

var spawnStars = false;

var s1,s2,s3,s4;

var space;

var instruction;

var end = false;

var gameState = "instruction";

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player(-100);

distance = createGraphics(160,30);

coinsC = createGraphics(150,30);

s1 = createGraphics(210,100);
s2 = createGraphics(200,50);
s3 = createGraphics(300,200);
s4 = createGraphics(300,200);

cp = createGraphics(200,100);

planetName = createGraphics(200,20);
planetName.background(0);
planetName.fill(255);
planetName.textSize(16);
planetName.textAlign(CENTER);

final = createGraphics(300,400);

instruction = new Inst(instx,insty);

space = new Bg();

for(var i = 0; i < 100; i++){
  star[i] = new Star();
}

checkpoint = new Checkpoint(40,1200,-1000);

occur = 300;
occur2 = 500;

var instx = 0;
var insty = 0;

x = 15;
a = 0;
}

//------------------------------------------------------------------------------------------------------

function keyPressed(){
  if(keyCode === RIGHT_ARROW && x === 15){
    x = 150;
    player.setDir(150,150);
  }else if(keyCode === RIGHT_ARROW && x === -130){
    x = 15;
    player.setDir(15,150);
  }else if(keyCode === LEFT_ARROW && x === 15){
    x = -130;
    player.setDir(-130,150);
  }else if(keyCode === LEFT_ARROW && x === 150){
    x = 15;
    player.setDir(15,150);
  }else if(keyCode === UP_ARROW){
    player.jump();
  }

  if(keyCode == 32){
    appear = true;
  }
}

function keyTyped(){
  colorMode(RGB)

 if(key == "1"){
   player.ship1();
   s1.background(0);
   s1.textAlign(CENTER);
   s1.textSize(16);
   s1.fill(255,10,10);
   s1.text("A very simple space-ship used by most ancient alien species.", 10, 40, 200);
 }

 if(key == "2"){
   player.ship2();
   s1.background(0);
   s1.textAlign(CENTER);
   s1.textSize(16);
   s1.fill(255,10,10);
   s1.text("A more specifically designed space-ship, appreciated by common people.", 10, 30, 200);
 }

 if(key == "3"){
   player.ship3();
   s1.background(0);
   s1.textAlign(CENTER);
   s1.textSize(16);
   s1.fill(255,10,10);
   s1.text("In this one, design is taken into priority, a stylish ship with modern-tech, appreciated by the richs!!", 10, 30, 200);
 }

 if(key == "4"){
   player.ship4();
   s1.background(0);
   s1.textAlign(CENTER);
   s1.textSize(16);
   s1.fill(255,10,10);
   s1.text("MUSCLE!! that describes it.. generally used in arena wars and by the military officials.", 10, 30, 200);
 }
}

function mousePressed(){
  if(gameState == "instruction" && instruction.button.mousePressed()){
    gameState = "select";
  }
}

//--------------------------------------------------------------------------------------------------------

function draw(){
 background(0,0,51);

 space.display();

 instruction.display();

 if(gameState == "select"){
   instruction.hide();
   instx = 1000;
   insty = 1000;
 }

 if(spawnStars){
  for(var s of star){
    s.display();
    s.z += 5;
 
    if(s.z > 0){
      s.z = random(-500,-1000);
      s.x = random(-1000,1000);
      s.y = random(-800,800);
    }
  }
 }

 push();
 rotateX(50);
 checkpoint.display();
 pop();

 player.fall();

 player.display();

 push();
  noStroke();
  texture(s1);
  translate(0,0)
  plane(desPx,desPy);
 pop();

 if(appear){
  spawnCoins();
  spawnObs();

  checkpoint.update(bodyRadius);

  desPx = 0;
  desPy = 0;
  
 distance.background(0,0,51);
 distance.fill(255);
 distance.textAlign(CENTER);
 distance.textSize(15);
 distance.text("DISTANCE: " + distCount,70,20);

 push();
 noStroke();
 texture(distance);
 translate(300,-170);
 plane(150,30);
 pop();

 if(frameCount % 8 == 0){
   distCount += 1;
 }

 coinsC.background(0,0,51,255);
 coinsC.fill(255);
 coinsC.textAlign(CENTER);
 coinsC.textSize(15);
 coinsC.text("COINS: " + coinsCount, 70,20);

 push();
 noStroke();
 texture(coinsC);
 translate(-250,-170);
 plane(150,30);
 pop();

 radius();
 finalPoint();

 planetName.background(0,0,51,255);
 planetName.text(name,100,15);
 push();
 translate(15,-190);
 texture(planetName);
 noStroke();
 plane(200,20);
 pop();

 if(end){
   clear();
   final.background(0);
   final.fill(255);
   final.textAlign(CENTER);
   final.textSize(32);
   final.text("DISTANCE: " + distCount + " COINS: " + coinsCount, 100, 100, 10);
   push();
   texture(final);
   noStroke();
   translate(50,-100);
   plane(200,200);
   pop();
   push();
   texture(cp);
   noStroke();
   translate(30,0);
   plane(200,100);
   pop();
 }

 }
}

//------------------------------------------------------------------------------------------------

function spawnObs(){
  if(frameCount%occur2 == 0){
    for(var i = 0; i > -2; i--){
     obstacle = new Obstacle(i+obstacleX+10,125,obstacleZ);
     obstacles.push(obstacle);
     a = 1;
     obstacleX += 90;
    }
   }
   
   if(frameCount%occur == 0){
     for(var i = 0; i < 2; i++){
       o2 = new Obstacle(i+obstacleX2,125,obstacleZ);
       obstacles2.push(o2);
       a2 = 1;
       obstacleX2 -= 90;
     }
   }
   
   if(obstacleX === 180){
     obstacleX = null;
   }
   
   if(obstacleX2 === -180){
     obstacleX2 = null;
   }
   
   for(var i of obstacles){
     if(player.zdir == i.z && 
       player.xdir - i.x <= 100 && 
       i.x - player.xdir <= 100 &&
       i.y - player.ydir <= 50 &&
       player.ydir - i.y <= 50){
       noLoop();
       end = true;
     }
     i.z += 10;
     i.display();
    }
   
    for(var j of obstacles){
      if(player.zdir < j.z-180){
        obstacles.shift();
      }
    }
   
    for(var i2 of obstacles2){
     if(player.zdir == i2.z && 
       player.xdir - i2.x <= 100 && 
       i2.x - player.xdir <= 100 &&
       i2.y - player.ydir <= 50 &&
       player.ydir - i2.y <= 50){
        noLoop();
        end = true;
      }
     i2.z += 10;
     i2.display();
    }
   
    for(var j of obstacles2){
       if(player.zdir < j.z-180){
         obstacles2.shift();
       }
    }
}

//----------------------------------------------------------------------------------------------------

function spawnCoins(){
  noOfCoins = random(2,6);

  if(frameCount%occur == 0){
   for(var i = 0; i < noOfCoins; i++){
    coin = new Coin(130,100,coinZ);
    coins.push(coin);
    coinZ += 90;
    }
    coinZ = -500;
  }
  if(frameCount%occur2 == 0){
    for(var i = 0; i < noOfCoins; i++){
      coin2 = new Coin(-130,100,coinZ);
      coins2.push(coin2);
      coinZ += 90;
    }
    coinZ = -500;
  }
  
   for(var co of coins){
     if(player.zdir <= co.z && 
      player.xdir - co.x <= 100 && 
      co.x - player.xdir <= 100){
      coins.pop();
      coinsCount+=1;
    }
    co.z += 5;
    co.display();
   }
  
   for(var co2 of coins2){
     if(player.zdir <= co2.z && 
      player.xdir - co2.x <= 100 && 
      co2.x - player.xdir <= 100){
       coins2.pop();
       coinsCount+=1;
     }
    co2.z += 5;
    co2.display();
   }
}

function radius(){
  spawnStars = true;
  if(frameCount > 0 && frameCount < 1000){
    planetName.background(0,0,51);
    name = "MOON";
    bodyRadius = 500;
  }

  if(frameCount > 1001 && frameCount < 2200){
    planetName.background(0,0,51);
    name = "MARS";
    bodyRadius = 600;
  }

  if(frameCount > 2201 && frameCount < 3400){
    planetName.background(0,0,51);
    name = "JUPITER";
    bodyRadius = 800;
  }

  if(frameCount > 3401 && frameCount < 4600){
    planetName.background(0,0,51);
    name = "SATURN";
    bodyRadius = 750;
  }

  if(frameCount > 4601 && frameCount < 5800){
    planetName.background(0,0,51);
    name = "URANUS";
    bodyRadius = 720;
  }

  if(frameCount > 5801 && frameCount < 7000){
    planetName.background(0,0,51);
    name = "NEPTUNE";
    bodyRadius = 700;
  }

  if(frameCount > 7001 && frameCount < 8200){
    planetName.background(0,0,51);
    name = "PLUTO";
    bodyRadius = 300;
  }

  if(frameCount > 8201 && frameCount < 10000){
    planetName.background(0,0,51);
    name = "MILKY-WAY";
    bodyRadius = 0;
  }

  if(frameCount > 10001){
    planetName.background(0,0,51);
    name = "THE UNIVERSE";
    bodyRadius = 0;
  }
}

//--------------------------------------------------------------------------------------------------

function finalPoint(){
  if(frameCount > 0 && frameCount < 1000){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "MOON", 80, 30, 10);
  }

  if(frameCount > 1001 && frameCount < 2200){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "MARS", 80, 30, 10);
  }

  if(frameCount > 2201 && frameCount < 3400){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "JUPITER", 80, 30, 10);
  }

  if(frameCount > 3401 && frameCount < 4600){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "SATURN", 80, 30, 10);
  }

  if(frameCount > 4601 && frameCount < 5800){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "URANUS", 80, 30, 10);
  }

  if(frameCount > 5801 && frameCount < 7000){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "NEPTUNE", 80, 30, 10);
  }

  if(frameCount > 7001 && frameCount < 8200){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "PLUTO", 80, 30, 10);
  }

  if(frameCount > 8201 && frameCount < 10000){
     cp.background(0);
     cp.noStroke();
     cp.fill(255);
     cp.textAlign(CENTER);
     cp.textSize(16);
     cp.text("LAST SEEN ON: " + "MILKYWAY(outskirts)", 80, 30, 10);
  }

  if(frameCount > 10001){
    cp.background(0);
    cp.noStroke();
    cp.fill(255);
    cp.textAlign(CENTER);
    cp.textSize(16);
    cp.text("LAST SEEN IN: " + "UNIVERSE", 80, 30, 10);
 }
}