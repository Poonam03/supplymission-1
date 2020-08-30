const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var helicopter,helicopterImage,ground,package,packageImage;


function setup()
{
 engine=Engine.create();
world=engine.world;
var canvas=createCanvas(400,400);
helicopter=new Helicopter(200,200);
//helicopter.scale=0.5;
ground=new Ground(200,390,1700,10);
package=new Package(200,200);
//package.scale=0.2;
package.visible=false;

}

function draw()
{
background("white");
Engine.update(engine);
helicopter.display();
ground.display();
package.display();
eject();
console.log(helicopter.x);
}
function eject()
{
	if(keyCode===DOWN_ARROW)
	{
			
			
			package.push(newPackage(mouseX,mouseY,20,20))
			
	
		}

}
