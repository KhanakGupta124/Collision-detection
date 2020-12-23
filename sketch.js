var fixedRect, MovingRect

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600,400, 70,80);

  movingRect = createSprite(100,100, 90,40);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;
 
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);


  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2  &&
     fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && 
     movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}