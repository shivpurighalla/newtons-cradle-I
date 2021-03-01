class Ball{
    constructor(x,y,r){
        var options={
            isStatic=false,
            restitution=0.5,
            density=2.0
        }
    this.radius=r;
    this.body=Bodies.circle(x,y,this.radius,options);
    this.x=x;
    this.y=y;
    }
    
    display(){
        push ();
        fill ("yellow");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop ();
    }
    };
    