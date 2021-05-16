
var player1,player2,ground1,ground2,invisibleGround;

var playerImg1,playerImg2
const distance=10000;




function setup() {
  createCanvas(1500, 700);

  player1=createSprite(100,280,20,20)
  ground1=createSprite(10,300,3000,10)
  ground1.velocityX=-5
  player2=createSprite(100,655,20,20)
  ground2=createSprite(10,670,3000,10)
  ground2.velocityX=-5
 // ground

  invisibleGround=createSprite(10,350,3000,20)
  invisibleGround.shapeColor = "white"

  
}


function draw(){

background(0)
text(mouseX+ "," +mouseY, mouseX, mouseY);
text("player1",130,50)

player1.collide(ground1)
ground1.velocityX=-5;
if(ground1.x<0){
  ground1.x=ground1.width/2;


  if(bullets.isTouching(player1)){

  }
}
if(keyDown(UP_ARROW)){
  player1.velocityY=-2
}
player1.velocityY=player1.velocityY+0.7;
bullets();

if(player1.x===distance){
  console.log("p1 wins")
}
text("player2", 130,450)


player2.collide(invisibleGround)
player2.collide(ground2)
ground2.velocityX=-5;
if(ground2.x<0){
  ground2.x=ground2.width/2;

}
if(keyDown("W")){
  player2.velocityY=-2
}
player2.velocityY=player2.velocityY+0.7;
bullets1();




drawSprites();
}


function bullets(){

  if (frameCount%100===0){
    var bull= createSprite(1400,Math.round(random(90,250)),10,10)
    bull.velocityX=-Math.round(random(1,9));
  }
}

function bullets1(){

  if (frameCount%100===0){
    var bull= createSprite(1400,Math.round(random(380,640)),10,10)
    bull.velocityX=-Math.round(random(1,9));
  }
}


function timer()