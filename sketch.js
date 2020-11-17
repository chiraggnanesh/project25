var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 790, 1600, 20);
	paper = new Paper(128, 400, 70);
	dustbin = new Dustbin(1200, 447);
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("white");

	paper.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:300, y:-338})
	}
}


