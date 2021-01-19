class Ball {
    constructor(x,y,radius){
    var options ={
    
    'restitution':0.2,
    'friction':0.3,
    'density':1.0
    
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.width = 50;
    this.height = 50;
    
    World.add(world,this.body);
    
    }
    display(){
    
    ellipseMode(CENTER);
    fill(255);
    ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
    
    }
    }