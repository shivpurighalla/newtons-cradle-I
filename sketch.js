
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var top;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

//top=new Bar(width/2,height/4,200,20);
ball1=new Ball(width/2,height/2,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //top.display();
  ball1.display();
  drawSprites();
 
}



