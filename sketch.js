
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var wall,thickness;
var bullet,speed,weight;


thickness=random(22,83)

speed=random(55,90)
weight=random(400,1500)

bullet=createSprite(100,200,15,15)
bullet.shapeColor=color(225)

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)

function setup() {
  createCanvas(1600,400);
  var groundOption={
    isStatic: true
  }
  
}

function draw() {
  background(255,255,255)
  

hasCollided();
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}

}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge>=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
