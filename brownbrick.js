class Brownbrick{
    constructor(x,y,width,height){
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,{restituion:0.8,friction:0.5,density:1})
        


        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
      

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("brown");
        rect(0,0,this.width,this.height)
        pop();
    }
}