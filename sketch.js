const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bg = "image/GamingBackground.png";
var bgImg;
var Ground;
function preload() {
  engine = Engine.create()
  world = engine.world;
//preload the images here
 bgImg =loadImage( "image/GamingBackground.png")
 
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  // var ground=new Ground(200,50,1200,60)
var hero=new Hero(200,40,500,60)
}

function draw() {
  Engine.update(engine)
  if(bgImg)
  {

  background(bgImg);
  }
ground.display();
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY })
}

