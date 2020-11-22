//name Spacing
const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine =Engine.create();
  world= engine.world;
  var ground_options ={
    isStatic :true
  }
ground= Bodies.rectangle(200,350,400,10,ground_options);
World.add(world,ground);
var ball_options = {
 restitution :-2
}
ball = Bodies.circle(100,100,10,ball_options);
World.add(world,ball)
console.log(ground);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) ;
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10)
rect(200,200,50,50);
}