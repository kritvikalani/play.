class Paper {
    constructor(x,y,radius) {

    var options= {
        isStatic: false,
        restitution: 0.1,
        friction: 0.5,
        density: 1.2
    }
    this.body= Bodies.circle(x,y,radius,options)
    this.body.radius= 20;

    World.add(world,this.body)
}
display(){
    var pos= this.body.position
    ellipseMode(RADIUS)
    fill("pink")
    ellipse(pos.x, pos.y, this.body.radius);
}
}
