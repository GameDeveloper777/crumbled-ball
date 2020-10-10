var wall,thickness;
var bullet,speed,weigth;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,70,50);
  wall=createSprite(800,200,thickness,height/2);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(211,211,211);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,225,0);  
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}