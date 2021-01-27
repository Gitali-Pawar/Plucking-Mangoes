
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1120,80,25);
	mango5=new mango(1150,75,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	
	stoneObj=new StoneClass(450,450,50,50);

	slingshotObj = new SlingShot(stoneObj,{x:450,y:450});
	Engine.run(engine);

}

function draw() {
//Engine.update(engine);
  background(230);
  //Add code for displaying text here!
  strokeWeight(3);
  Text("Press Space to get a second Chance to play");
  image(boy ,200,340,200,300);

  drawSprits()

  treeObj.display();
  mango1.display();
  stoneObj.display();
  groundObject.display();
  slingshotObj.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj,{x:450,y:450});

}
function mouseReleased(){
    slingshot.fly()
}
