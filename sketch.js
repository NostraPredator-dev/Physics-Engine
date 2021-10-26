//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    canvas = createCanvas(1360,720);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    var pillar_options = {
        restitution: 1
    }

    ground = Bodies.rectangle(680, 657, 1362, 20, ground_options)
    pillar10 = Bodies.rectangle(360, 435, 200, 420, pillar_options)
    brick11 = Bodies.rectangle(360, 194, 60, 60, pillar_options)
    pillar20 = Bodies.rectangle(1000, 435, 200, 420, pillar_options)
    brick21 = Bodies.rectangle(1000, 194, 60, 60, pillar_options)
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    
    rectMode(CENTER);
    fill("green")
    rect(ground.position.x, ground.position.y, 1362, 20)
    fill("grey")
    rect(pillar10.position.x, pillar10.position.y, 200, 420)
    rect(pillar20.position.x, pillar20.position.y, 200, 420)
    fill("yellow")
    rect(brick11.position.x, brick11.position.y, 60, 60)
    rect(brick21.position.x, brick21.position.y, 60, 60)
}