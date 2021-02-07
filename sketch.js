const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13;

var Polygon;

var ground1;

var sling;

function preload(){
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(600,285,200,10);
  
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);

  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);

  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);

  block13 = new Block(600,140,30,40);
  
  Polygon = new polygon(110, 100, 20, 20);

  sling = new SlingShot(Polygon.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);

  ground1.display();

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();

  ground1.display();
  
  Polygon.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(Polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}  
