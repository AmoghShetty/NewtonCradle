class Bob {
    constructor(x, y,radius ) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.2,
          isStatic:false
          
      }
      this.x=x;
      this.y=y;
      this.r=radius;
      this.body = Bodies.circle(x, y, this.r/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
     stroke ("blue");
     strokeWeight(5);
      fill("blue");
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r)
     
      pop();
    }
  };
  