class Package
{
    constructor(x,y)
    {
        var options={restituion:1,friction:0.5}
        this.body=Bodies.rectangle(x,y,20,20,options);
        this.width=20;
        this.height=20;
        this.image=loadImage("package.png");
        World.add(world,this.body);
       
    }
display()
{
    var pos=this.body.position;
   
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
    
    pop();

}


}