
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
// var circleA;
// var circleB;
var circles = [];
var ground;




function setup() {
    createCanvas(400, 400);
    img = loadImage('location.png');
    engine = Engine.create();
    world = engine.world;
    //circleA = Bodies.circle(1, 1, 32);
    //circleB = Bodies.circle(1, 100, 32);
    ground = Bodies.rectangle(200, height, 350, 100, { isStatic: true });
    Engine.run(engine);
    //World.add(world, [circleA, circleB]);
    circle1 = new Circle(1, 1, 64);
    World.add(world, ground);
    setInterval(drawCircle, 1500);
    // drawCircle();
}

function mousePressed() {
    circles.push(new Circle(mouseX, mouseY, 32));
}

function draw() {
    background(220);
    //ellipse(50, 50, 80, 80);
    //image(img, circleA.position.x, circleA.position.y);
    //image(img, circleB.position.x, circleB.position.y);

    // Engine.update(engine);
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    //circle1.show();
}

function drawCircle() {
    circles.push(new Circle(random(10, 350), 20, 32));
}