var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4,isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	

	 //slide1 = new Slide(150,50,100,20);

	boxPosition= width/2-100;
	 boxY=610;
	 
	 //yaha tak simple sprite bani hai
	slide1=createSprite(boxPosition, boxY, 20,100);  //left wali vertical dandi
 	slide1.shapeColor=color(255,0,0);
	  
	 //yaha pe upar wali simple sprite ki perfect physics engine wali body bnegi
	 slide1Body = Bodies.rectangle(boxPosition+20, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, slide1Body);

	 slide2=createSprite(boxPosition+100, boxY+40, 200,20);  //left wali vertical dandi
	 slide2.shapeColor=color(255,0,0);
	 
	 slide2Body = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20 , {isStatic:true} );
	 World.add(world, slide2Body);

	 slide3=createSprite(boxPosition+200, boxY, 20,100);  //left wali vertical dandi
	 slide3.shapeColor=color(255,0,0);
	 
	 slide3Body = Bodies.rectangle(boxPosition+200, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, slide3Body);
	  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //slide1.display();

  Engine.update(engine);

  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
 }

}



