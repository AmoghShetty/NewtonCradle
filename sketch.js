const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var startX,startY;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(width/2,height/4,width/7,20);
	startX=width/2;
	startY=height/4+500;
	//Create the Bodies Here..
	bob1 = new Bob (startX-40*2,startY,40);
	bob2 = new Bob (startX-40,startY,40);
	bob3 = new Bob (startX,startY,40);
	bob4 = new Bob (startX+40,startY,40);
	bob5 = new Bob (startX+40*2,startY,40);
	rope1 = new Chain (bob1.body,roof.body,-40*2,0);
	rope2 = new Chain (bob2.body,roof.body,-40,0);
	rope3 = new Chain (bob3.body,roof.body,0,0);
	rope4 = new Chain (bob4.body,roof.body,40,0);
	rope5 = new Chain (bob5.body,roof.body,40*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}



