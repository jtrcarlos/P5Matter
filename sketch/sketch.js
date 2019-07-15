
var screenHeight = $(window).height();
var screenWidth = $(window).width();
var screenWidthBorder = $(window).width() * 0.90;


var Engine = Matter.Engine,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Bodies = Matter.Bodies;

var engine;
var world;
// var circleA;
// var circleB;
var circles = [];
var ground;

var mConstraint;

function setup() {
    // createCanvas(400, 400);
    var canvas = createCanvas(screenWidth, screenHeight);
    img = loadImage('hot-pepper.png');
    engine = Engine.create();
    world = engine.world;
    //circleA = Bodies.circle(1, 1, 32);
    //circleB = Bodies.circle(1, 100, 32);
    // ground = Bodies.rectangle(width / 2, height + 50, 300, 100, { isStatic: true });
    ground = Bodies.rectangle(screenWidth / 2, screenHeight + 50, screenWidthBorder, 100, { isStatic: true });
    Engine.run(engine);
    //World.add(world, [circleA, circleB]);
    //circle1 = new Circle(1, 1, 64);
    World.add(world, ground);

    /// DRAWS CIRCLE EVERY X MILISECONDS
    setInterval(drawCircle, 500);
    // drawCircle();
    textAlign(CENTER, CENTER);
    textSize(64);

    /// DRAG OBJECTS WITH MOUSE
    // sync mouse canvas with screen
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var optionsMouse = {
        mouse: canvasMouse
    }

    mConstraint = MouseConstraint.create(engine, optionsMouse);
    World.add(world, mConstraint);
}

/// CREATE OBJECTS WITH MOUSE
// function mousePressed() {
//     circles.push(new Circle(mouseX, mouseY, 32));
// }

function draw() {
    background(220);
    //image(img, circleA.position.x, circleA.position.y);
    //image(img, circleB.position.x, circleB.position.y);

    Engine.update(engine);
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        if (circles[i].isOffScreen()) {
            circles[i].removeFromWorld();
            circles.splice(i, 1);
            i--;
        }
    }

    text('Page in Construction', screenWidth / 2, screenHeight / 2);
}

function drawCircle() {
    // circles.push(new Circle(random(10, 350), 20, 32));
    circles.push(new Circle(random(20, screenWidth - 20), -20, 32));
}

console.log(`
    This site was made using: 
    https://p5js.org/
    http://brm.io/matter-js/

`);
