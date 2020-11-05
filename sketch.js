var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 200, 50, 5);

  wall = createSprite(1150, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  thickness = Math.round(random(22, 83));

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);
  stroke("white");
  fill("white");
  text("Speed: " +speed, 100, 50); 
  text("Weight: " +weight, 100, 80);
  text("Thickness: " +thickness, 1100, 50); 

  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(deformation > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if(deformation < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}