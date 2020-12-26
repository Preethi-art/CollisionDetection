var car,wall,speed,weight,deformation;

function setup()
{
createCanvas(windowWidth,windowHeight);
car=createSprite(50,200,50,50);
car.shapeColor="blue"
wall=createSprite(1000,200,30,80);
wall.shapeColor="brown";
speed=random(90,190)
weight=random(400,1500)
car.velocityX=speed;

}

function draw()
{
  background("white");

  if(wall.x-car.x<wall.width/2+car.width/2)
  {
   car.velocityX=0;
   deformation=(0.5*weight*speed*speed)/22509;
    if(deformation>180)
    {
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
    }
    if(deformation<180)
    {
      car.shapeColor="green";
    }


  }
  drawSprites();

}