
var r = 0;
var g = 50;
var b=255;

var mouse1;



function setup(){

  createCanvas(1200,400);
  mouse1 = createSprite(600,200,30,30);
  mouse1.shapeColor = "grey";
}


function draw(){
  
  
  r = map(mouseX, 0, 1200, 0, 255 );
  g = map(mouseX, 300, 900, 50, 50);
  b = map(mouseX, 0, 1200, 255, 0);
  
 
  
  background(r,g,b);
  

  
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  
  fill("yellow");
 ellipseMode(RADIUS);
 ellipse(mouseX,200,10,10);
 
}