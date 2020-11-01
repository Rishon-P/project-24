
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(400,690,800,35)
	binpart1 = new dustbin(710,670,115,20)
	binpart2 = new dustbin(770,645,20,70)
	binpart3 = new dustbin(660,645,20,70)
	paper1 = new paper(35);
	

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
    rectMode(CENTER);
    background(0);

	ground1.display();
	binpart1.display();
    binpart2.display();
	binpart3.display();
	paper1.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}

