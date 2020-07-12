var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(500,200,60,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  speed=random(55,90);
  weight=random(400,1500);
 
if(car.collide(wall)){
deformation=  0.5*weight*speed*speed/22500;


if(deformation=100){
car.shapeColor="green";

}

if(deformation=160){
  car.shapeColor="yellow";
  
  }

  
  if(deformation=200){
    car.shapeColor="red";
    text("Deformation considered as LETHAL",200,200)
    }
}    





  car.velocityX=speed/5;
  drawSprites();
}
