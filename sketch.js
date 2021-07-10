
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png");
shipImg2 = loadAnimation("ship-2.png");
}

function setup(){
  createCanvas(400,400);
sea.addImage(seaImg);
}

function draw() {
  background("blue");
 if(sea.x < 0){
  sea.x = sea.width/2;
 }
}