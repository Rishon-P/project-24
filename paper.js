class paper{
    constructor(radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body = Bodies.circle(50,645,radius,options)
      this.radius = radius
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("green")
        ellipse(pos.x,pos.y,this.radius)
    }
}