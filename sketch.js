var canvas,bgImg;
var together;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
catImg1 = loadAnimation("images/cat1.png");
mouseImg1 = loadAnimation("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3 = loadAnimation("images/cat4.png");
catImg = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat =createSprite(870,600);
cat.addAnimation("catsiting",catImg1);
cat.scale = 0.2;

mouse = createSprite(50,100);
mouse.addAnimation("mouseStanding",mouseImg1);
mouse.scale = 0.15;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX=0;
cat.aadAnimation("catLastImage",tomImg3);
cat.x =300;
cat.scale=0.2;
cat.changeAnimation("catLastImage");
mouse.addAnimation("mouseLastImage",mouseImg3);
mouse.scale=0.15;
mouse.changeAnimation("mouseLastImage");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    
cat.addAnimation("catRunning",mouseimg2);
cat.changeAnimation("catRunning");
cat.frameDelay = 25;

mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    }
    
}
