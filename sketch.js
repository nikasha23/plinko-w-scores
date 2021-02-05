var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;

var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground= new Ground(width/2,height,width,20);

  for (var k=0; k<=width; k= k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  fill("white");
  text(" 500 ",10,550);
  text(" 500 ",85,550);
  text("500",170,550);
  text("50",250,550);
  text("50",330,550);
  text("50",410,550);
  text("200",490,550);
  text("200",570,550);
  text("200",650,550);
  text("10",730,550);

  Engine.update(engine);
 
  ground.display(); 

  for(var i=0;i<plinkos.length; i++){
    plinkos[i].display();
  }

  

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-200,width/2+200),30,10));
  }

  for(var k=0;k<particles.length; k++){
    particles[k].display();
  }

  for(var j=0;j<divisions.length; j++){
    divisions[j].display();
  }

  if(particle!=null){
    particle.display();

      if(particle.body.position.y>760){
        if(particle.body.position.x<360){
          score=score+500;
          particle=null;
          
        }
      }
  }


  //drawSprites();
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10)
  }
}