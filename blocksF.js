class BlocksF{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("BLOCKS.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();

        stroke("black");
        strokeWeight(4);

        fill("yellow");
       
      
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
       
      }
}



