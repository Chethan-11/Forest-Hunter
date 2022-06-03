var bjimg
var bgGround
function setup() {
  createCanvas(1200, 600);
}
function preload(){
  bgimg=loadImage("background.jpg");
  
  }
  function setup()
  {
    createCanvas(1200,600);
    bgGround= createSprite(0,0,1200,600)
    bgGround.addImage(bgimg);
  
  }
  
  function draw() 
  {
    //background(51);
   drawSprites()
  }
