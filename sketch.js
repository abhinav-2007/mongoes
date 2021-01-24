
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone1;
var world,boy,slingshot1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(750,100,30);
	mango2=new mango(620,200,30);
	mango3=new mango(900,230,30);
	mango4=new mango(640,290,30);
	mango5=new mango(820,200,30);
	mango6=new mango(760,270,30);
	mango7=new mango(690,210,30);
	stone1=new stone(190,418,30);

	treeObj=new tree(750,580);
	groundObject=new ground(width/2,600,width,20);
	//slingshot1 = new slingshot(stone.body,{x:200,y:100});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,150,340,200,300);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone1.display();
  slingshot1.display();
  groundObject.display();
}
 function mouseDragged(){
     Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
    }
//    function mouseReleased(){
//       slingshot1.fly();
 //}
   