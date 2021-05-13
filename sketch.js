var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver;
var restart;
var gameOverImg;
var restartImg;
var score;
var ball;
var obstaclesGroup,obstacle, obstacle1, obstacle2, obstacle3, obstacle4;
var apple,banana,watermellon,mango,peer;
var monsterSound, fruitSound;

function preload(){
   appleImg=loadImage("apple.png");
   bananaImg=loadImage("banana.png");
   peerImg=loadImage("peer.png");
   obstacle1 = loadImage("monster2.png");
   obstacle2= loadImage("monster4.png");
   obstacle3 = loadImage("monster5.png");
   obstacle4 = loadImage("monster6.png");
   gameOverImg=loadImage("GameOver.png");
   restartImg=loadImage("reset.png");
   strawberryImg=loadImage("strawberry-png.png");
   mangoImg=loadImage("mango_PNG.png");
   watermellonImg=loadImage("watermelon.png")
 
   monsterSound=loadSound("monster.mp3");
   fruitSound=loadSound("apple.mp3");
  
 
}
function setup(){
    canvas = createCanvas(1276,602);
    ball=createSprite(300,250,10,10);
    ball.shapeColor="red";
    ball.scale=0.2;
    
    score=0;
    gameOver=createSprite(638,200,30,20);
    restart=createSprite(638,400,30,20);
    gameOver.addImage("gameOver",gameOverImg);
    restart.addImage("restart",restartImg);
    gameOver.scale=0.3;
    restart.scale=0.3;
    gameOver.visible=false;
    restart.visible=false;
    
    obstaclesGroup = new Group();
    //fruitsGroup= new Group();
    bananaGroup = new Group();
    mangoGroup = new Group();
    peerGroup = new Group();
    watermellonGroup = new Group();
    appleGroup = new Group();
}

function draw()
{
 background("black");
 textSize(40);
fill("white");
textFont("ALGERIAN");
 text("score:"+ score,50,50);
 if(gameState === PLAY){
  if(obstaclesGroup.isTouching(ball)){
      
     
      monsterSound.play();
      gameState = END;
  }
 if(appleGroup.isTouching(ball)){
   score ++
   fruitSound.play();
 }
 if(bananaGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}

if(mangoGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}
if(watermellonGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
}
if(peerGroup.isTouching(ball)){
  
  monsterSound.play();
  gameState = END;
 
}


   
if(keyDown(UP_ARROW)){
  changePosition(0,-20);
}
else if(keyDown(DOWN_ARROW)){
  changePosition(0,20)
}

spawnObstacles();
spawnFruits();
ball.addImage(appleImg);

}

else if(gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
  spawnFruits.visible=false;
spawnObstacles.visible=false;
score.visible=true;
ball.visible=false;
  //set velcity of each game object to 0
  
  ball.velocityY = 0;
  ball.velocityX=0;
  obstaclesGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  appleGroup.setVelocityXEach(0);
  peerGroup.setVelocityXEach(0);
  watermellonGroup.setVelocityXEach(0);
  mangoGroup.setVelocityXEach(0);
  bananaGroup.setLifetimeEach(0);
  appleGroup.setLifetimeEach(0);
  peerGroup.setLifetimeEach(0);
  mangoGroup.setLifetimeEach(0); 
  watermellonGroup.setLifetimeEach(0); 
  obstaclesGroup.setLifetimeEach(0);
  if(mousePressedOver(restart)) {
  reset();
}
  
}

drawSprites();
}
function changePosition(x,y){
  ball.x=ball.x+x;
  ball.y=ball.y+y;
}

function spawnFruits() {
  if(frameCount % 500 === 0) {
    var fruitRow = createSprite(1200,100,10,40);
   // fruitRow.velocityX = -4;
    fruitRow.scale = 0.05;
    fruitRow.lifetime = 300;
    for(var i=0;i<5;i++)
   
    { if(i=1) {
        banana=createSprite(1200,50,10,10)
        banana.addImage(bananaImg)
     banana.scale=0.02 
    banana.velocityX=-2;
    banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
   bananaGroup.add(banana);
  }

       if(i=2) {
           apple=createSprite(1200,170,10,10) 
          apple.addImage(appleImg) 
          apple.scale=0.2;
          apple.velocityX=-2;
          apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          appleGroup.add(apple);
         } 
         if(i=3) { 
           watermellon=createSprite(1210,290,10,10)
        watermellon.addImage(watermellonImg) 
           watermellon.scale=0.2;
          watermellon.velocityX=-2;
          watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          watermellonGroup.add(watermellon);
          } 
           if(i=4) { 
             mango=createSprite(1210,410,10,10)
            mango.addImage(mangoImg) 
            mango.scale=0.3;
            mango.velocityX=-2;
            mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
            mangoGroup.add(mango);
            } 
           if(i=5) { 
             peer=createSprite(1200,530,10,10)
            peer.addImage(peerImg) 
               peer.scale=0.2;
               peer.velocityX=-2;
               peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
               peerGroup.add(peer);
          } 
    
          if(i=6) { 
            peer=createSprite(950,50,10,10)
           peer.addImage(peerImg) 
              peer.scale=0.2;
             peer.velocityX=-2;
             peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
              peerGroup.add(peer);
         } 
         if(i=4) { 
          mango=createSprite(950,170,10,10)
         mango.addImage(mangoImg) 
         mango.scale=0.3;
         mango.velocityX=-2;
         mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
         mangoGroup.add(mango);
         } 
        if(i=7) {
          apple=createSprite(950,290,10,10) 
         apple.addImage(appleImg) 
         apple.scale=0.2;
         apple.velocityX=-2;
         apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
         appleGroup.add(apple);} 
  
         if(i=8) { 
          watermellon=createSprite(960,410,10,10)
       watermellon.addImage(watermellonImg) 
          watermellon.scale=0.2;
          watermellon.velocityX=-2;
          watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
          watermellonGroup.add(watermellon);
         } 
  
          if(i=9) {
          banana=createSprite(950,520,10,10)
          banana.addImage(bananaImg)
       banana.scale=0.02 
      banana.velocityX=-2;
      banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
      bananaGroup.add(banana);
    }
    if(i=10) { 
      watermellon=createSprite(700,50,10,10)
   watermellon.addImage(watermellonImg) 
      watermellon.scale=0.2;
      watermellon.velocityX=-2;
      watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
      watermellonGroup.add(watermellon);
     }      
     if(i=11) { 
      peer=createSprite(700,160,10,10)
     peer.addImage(peerImg) 
        peer.scale=0.2;
       peer.velocityX=-2;
       peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
        peerGroup.add(peer);
   } 
   if(i=12) {
    banana=createSprite(700,290,10,10)
    banana.addImage(bananaImg)
 banana.scale=0.02 
banana.velocityX=-2;
banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
bananaGroup.add(banana);
}   
if(i=13) { 
  mango=createSprite(720,410,10,10)
 mango.addImage(mangoImg) 
 mango.scale=0.3;
 mango.velocityX=-2;
 mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 mangoGroup.add(mango);
 } 
        
 if(i=14) {
  apple=createSprite(710,540,10,10) 
 apple.addImage(appleImg) 
 apple.scale=0.2;
 apple.velocityX=-2;
 apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 appleGroup.add(apple);} 
        
 if(i=15) {
  apple=createSprite(450,50,10,10) 
 apple.addImage(appleImg) 
 apple.scale=0.2;
 apple.velocityX=-2;
 apple.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 appleGroup.add(apple);} 
        
 if(i=16) {
  banana=createSprite(450,170,10,10)
  banana.addImage(bananaImg)
banana.scale=0.02 
banana.velocityX=-2;
banana.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
bananaGroup.add(banana);
}         
if(i=17) { 
  peer=createSprite(450,290,10,10)
 peer.addImage(peerImg) 
    peer.scale=0.2;
   peer.velocityX=-2;
   peer.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
    peerGroup.add(peer);i
}        
if(i=18) { 
  watermellon=createSprite(460,410,10,10)
watermellon.addImage(watermellonImg) 
  watermellon.scale=0.2;
 watermellon.velocityX=-2;
 watermellon.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
  watermellonGroup.add(watermellon);
 }            
        
 if(i=13) { 
  mango=createSprite(460,530,10,10)
 mango.addImage(mangoImg) 
 mango.scale=0.3;
 mango.velocityX=-2;
 mango.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
 mangoGroup.add(mango);
 }      
        
 
fruitRow.lifetime = 300;
        
        
        
        
        
        
        
        
        
        
        
        
        }
}
}
function spawnObstacles() {
  if(frameCount % 250 === 0) {
    obstacle = createSprite((1200),random(100,500),10,40);
    obstacle.velocityX = -4;
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      
      default: break;
    }
  
  
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   
  }
}

function reset(){
  gameState=PLAY ;
 gameOver.visible=false;
 restart.visible=false;
 appleGroup.destroyEach();
 obstaclesGroup.destroyEach();
 bananaGroup.destroyEach();
 peerGroup.destroyEach();
 mangoGroup.destroyEach();
 watermellonGroup.destroyEach();
 ball.visible=true;
 ball.x=300;
 ball.y=300;
score=0;
 }
 