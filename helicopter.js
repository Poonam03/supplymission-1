class Helicopter
{
    constructor()
    {
       var options={isStatic:true}
        this.body=Bodies.rectangle(200,200,20,20,options);
        this.width=20;
        this.height=20;
        this.x=200;
        this.y=200;
        this.image=loadImage("helicopter.png");
        World.add(world,this.body)
        
    }
display()
{
   imageMode(CENTER);
   image(this.image,200,200,this.width,this.height);
   // this.rect(this.body.position.x,body.position.y,this.width,this.height);
}

}