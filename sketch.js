var ground, paper, dustin;
var render, engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})
	Render.run(render);

	ground = new Ground(800, 790, 1600, 20);
	paper = new Paper(128, 400, 70);
	dustbin = new Dustbin(1200, 447);
}


function draw() {
	background("white");

	paper.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y:-145})
	}
}


