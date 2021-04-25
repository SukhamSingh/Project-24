const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var balls ;
var red;
var brown;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    brown = new Brownbrick(800,590,150,200)
    plane = new Plane(600,height,1200,100);
     hammer = new Hammer(10,100);
      balls = new Rubber(700,599,150);
    red = new Redbrick(500,590,100,100)

    ball1 = new Brownballs(710,590,12);
    ball2 = new Brownballs(711,590,12);
    ball3 = new Brownballs(712,590,12);
    ball4 = new Brownballs(713,590,12);
    ball5 = new Brownballs(714,590,12);
    ball6 = new Brownballs(715,590,12);
    ball7 = new Brownballs(716,590,12);
    ball8 = new Brownballs(717,590,12);
    ball9 = new Brownballs(718,590,12);
    ball10 = new Brownballs(719,590,12);
    ball11 = new Brownballs(720,590,12);
    ball12= new Brownballs(721,590,12);
    ball13 = new Brownballs(722,590,12);
    ball14= new Brownballs(723,590,12);
    ball15= new Brownballs(724,590,12);
    ball16= new Brownballs(725,590,12);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

 plane.display();
 balls.display();
 hammer.display();
red.display();
    brown.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
}