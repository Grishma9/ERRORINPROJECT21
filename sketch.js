var canvas,surface1,surface2,surface3,surface4,box;
var music,edgeSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,500);

    //create 4 different surfaces

    surface1=createSprite(100,400,100,40);
    surface1.shapeColor="blue";
   surface2=createSprite(300,400,100,40);
    surface2.shapeColor="orange";
   surface3=createSprite(500,400,100,40);
    surface3.shapeColor="green";
    surface4=createSprite(700,400,100,40);
   surface4.shapeColor="pink";

    //create box sprite and give velocity
  box=createSprite(random(20,750),100,50,50);
  box.shapeColor="white"
 box.velocityY=4;
 
}

function draw() {
    background("grey");
    music.play();
    //create edgeSprite
 edgeSprite=createSprite(500,20,1000,10);
 //edgeSprite=createSprite(500,490,1000,10);
 box.bounceOff(edgeSprite);
drawSprites();
if(surface1.isTouching(box) && box.bounceOff(surface1)){
 box.shapeColor=surface1.shapeColor;
 box.velocityY=0;
 box.stopSound();

}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor=surface2.shapeColor;
    box.velocityY=0;
    box.stopSound();
 }
   if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor=surface3.shapeColor;
    box.velocityY=0;
    box.stopSound();
}
   if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor=surface4.shapeColor;
    box.velocityY=0;
    box.stopSound();
   
}
    //add condition to check if box touching surface and make it box
}
