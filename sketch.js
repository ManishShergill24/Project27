const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var handle1,ball1,ball2,ball3,ball4,ball5;
var constraintjoiner1,constraintjoiner2,constraintjoiner3,constraintjoiner4,constraintjoiner5;
var Box

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1  = new Ball(210,500,5);
	ball2 = new Ball(260,500,5);
	ball3 = new Ball(310,500,5);
	ball4 = new Ball(360,500,5);
	ball5 = new Ball(410,500,5);
	handle1 = new HandleClass(310,100,250,50);
	constraintjoiner1 = new join(ball1.body,{x:210,y:100});
	constraintjoiner2 = new join(ball2.body,{x:260,y:100});
	constraintjoiner3 = new join(ball3.body,{x:310,y:100});
	constraintjoiner4 = new join(ball4.body,{x:360,y:100});
	constraintjoiner5 = new join(ball5.body,{x:410,y:100});
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()  
  handle1.display();
  constraintjoiner1.display();
  constraintjoiner2.display();
  constraintjoiner3.display();
  constraintjoiner4.display();
  constraintjoiner5.display();

 
}
function keyPressed(){

	if(keyCode === 38){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-5,y:0});
		
		}


}