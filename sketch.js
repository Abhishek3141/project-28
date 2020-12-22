
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyimage
function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprites(250, 600, 30, 50);
	boy.addImage(boyimage);
	//Create the Bodies Here.
	stone1 = new stone(270, 570, 30);
	tree1 = new tree(600, 650, 100, 150);
	ground1 = new ground(400, 680, 1000, 20);
	mango1 = new mango(570,570,20,20 )
	mango2 = new mango(590,570,20,20 )
	mango3 = new mango(560,560,20,20 )
	mango4 = new mango(590,590,20,20 )
	boy = Constraint.create(stone1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
  tree1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();


  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        boy.attach(stone.body);
    }
}


