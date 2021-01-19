const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var object;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  var options={
    isStatic:true
  }
  object=Bodies.rectangle(400,390,800,20,options)
  World.add(world,object)

  var ballOptions={
    restitution:1.0 
  }
 ball=Bodies.circle(400,100,20,ballOptions);
 World.add(world,ball);
console.log(ball.position);
  
}

function draw() {
  background("blue");
  Engine.update(engine);  

rectMode(CENTER);
rect(object.position.x,object.position.y,800,20);
console.log(ball.position);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}