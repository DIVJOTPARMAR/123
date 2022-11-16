var helicopter 
function setup() {
  createCanvas(600,600);

helicopter=createSprite(200,200,50,50)

}

function draw() 
{
  background("cyan");


  if(keyIsDown(RIGHT_ARROW)){

helicopter.position.x=helicopter.position.x+5
  }

  if(keyIsDown(DOWN_ARROW)){

    helicopter.position.y=helicopter.position.y+5
      }



      

  drawSprites()

}



















