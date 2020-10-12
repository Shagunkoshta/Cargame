var car,wall;
var speed,weight;
var x;

function setup() {
  createCanvas(600,400);

  wall = createSprite(50,100,20,height/2);
  wall.shapeColor="blue";
  car = createSprite(500,100,20,20);
  car.shapeColor="red";
}

function draw() {
  background("black");

if (wall.x-car-x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if  (deformation>180)
{
car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if (deformation<100)
{
car.shapeColor=color(0,255,0);
}
}
 speed=random(55,90);
 weight=random(400,1500);
 
  drawSprites();
}