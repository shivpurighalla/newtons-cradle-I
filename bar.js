class Bar{
    constructor(x,y,w,h){
        var options={
            isStatic=true,
            restitution=0,
            density=5.0
        }
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
    this.body=Bodies.rectangle(x,y,w,h,options);
    }
    
    display(){
        push ();
        rectMode(CENTER);
        fill ("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();
    }
    };
    