
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius = 40;
var groundObj,leftSide;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

	ball = Bodies.circle(260,100,radius/2,ball_options);
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  ellipse(ball.position.x,ball.position.y,radius,radius)
  drawSprites();
 
}
 
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.position,{x:85,y:-85})
		
	}
}



