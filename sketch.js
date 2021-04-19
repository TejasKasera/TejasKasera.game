var planeIMG, plane;
var ground, groundIMG, invisibleGround;
var star, starIMG, starsGroup;
var bullet, bulletIMG, bulletGroup;
var alien1, alien1IMG, alien1Group;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	planeIMG=loadImage("plane1Image.png");
	starIMG = loadImage("star1IMage.png");
	groundIMG = loadImage("backgrIMage.jpg");
	bulletIMG = loadImage("bulletImage.png");
    alien1IMG = loadImage("alien1Image.png");
	
}

function setup() {
	rectMode(CENTER);
	var canvas = createCanvas(900,700,1500,700);

	ground = createSprite(200,200);
	ground.addImage(groundIMG);
	ground.x = 450;
	ground.velocityX = 2;

	alien1 = createSprite(120,250,15,15);
	alien1.addImage(alien1IMG);
	alien1.scale = 0.3;
	alien1.velocityX = 5;


	bullet = createSprite(650,270,20,10);
	bullet.addImage(bulletIMG);
	bullet.scale = 0.1;
	bullet.visible = false;
	
	
	starsGroup = new Group();
	bulletGroup = new Group();
	aliens1Group = new Group();

	engine = Engine.create();
	world = engine.world;
	
	plane=createSprite(700, 200, 10,10);
	plane.addImage(planeIMG);
	plane.scale=0.9
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  plane.position.y = mouseY;
  
  bullet.position.y = plane.position.y

  

  if(ground.x>650){
    ground.x = 450;
}
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    spawnBullets();
  }

  if(alien1.isTouching(bullet)){
     alien1.visible = false;
	 bullet.visible = false;
  }


  if(alien1.isTouching(plane)){
     plane.visible = false;
  }

  Engine.update(engine);
  spawnStars();
  drawSprites();
 
}

function spawnStars(){

	if(frameCount % 10 === 0){


   var randomNumber = Math.round(random( 3, displayWidth));
   var star = createSprite(-5,random(10,500),5,5);
   star.addImage(starIMG);
   star.scale = 0.4;
   star.velocityX = 5;
   star.lifetime = 800;
   starsGroup.add(star);

  }
}

function spawnBullets(){
    bullet.visible = true;
	bullet.velocityX = -5;
}



