//loadImage is used to load a single image
//load animation is used to adding multiple images
var trex, trexImage
var ground, groundImage
var invisGround
var spawnObstacle,
obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6    











function preload()
{
  trexImage=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup()
{
  createCanvas(400,400);
  trex=createSprite(30,200,10,10);
  trex.addAnimation("trexRunning",trexImage);
  trex.scale=0.5;
  
  ground=createSprite(200,210,1000,10);
  ground.addImage("ground",groundImage);
  ground.velocityX=-10
  
  invisGround=createSprite(200,225,1000,10);
  invisGround.visible=false;
}

function draw()
{
  createEdgeSprites();
  background("white");
  
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  trex.collide(invisGround)
  trex.velocityY=trex.velocityY+0.7;
  if(keyDown("space")&&trex.y>=190)
    {
      trex.velocityY=-10;         
    }
  // console.log(trex.y)
  
  if(ground.x<0)
     {
     ground.x=ground.width/2
     }
  
  
  
  
  spawnObstacles();
  drawSprites();
}

function spawnObstacles()
{
  if(frameCount%60==0)
  {
    spawnObstacle=createSprite(400,200);
    spawnObstacle.velocityX=-10;
    var rand=random(1,6);
    switch(rand)
      {
        case 1:spawnObstacle.addimage("enemy1",obstacle1)
          break
          default: 
          break
          
          
          
          
          
      }
  }
     
     
}
