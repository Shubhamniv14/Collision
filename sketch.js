var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  movingRect=createSprite(200,200,80,30);
  movingRect.velocityX=1;
  fixedRect.velocityX=-1;
}

function draw() {
  background('orange');  
 // movingRect.y=World.mouseY;
  //movingRect.x=World.mouseX;
if(isTouching(fixedRect,movingRect)){
  movingRect.shapeColor='blue';
  fixedRect.shapeColor='blue';



}
else{
  movingRect.shapeColor='cyan';
  fixedRect.shapeColor='cyan'; 


}  
bounce(fixedRect, movingRect);
  drawSprites();
}









