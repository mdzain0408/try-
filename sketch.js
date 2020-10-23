var weight,speed
var car 
var wall




function setup() {
  createCanvas(1600,400);
  
  
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1600,200,60,25);

}

function draw() {
  background(0);  
  drawSprites();
}