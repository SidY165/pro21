
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false
		,restitution:0.3
		,friction:0
		,density:1.2
	}
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.options.x, ball.options.y,20)
  
  drawSprites();
 
  ground.obj.display()

}



