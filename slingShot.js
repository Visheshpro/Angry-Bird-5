class slingShot {

constructor(a,b){

var options= {

    bodyA:a,
    bodyB:b,
    stiffness:0.3,
    length:10
}

this.sling = Constraint.create(options)
World.add(world, this.sling)

}

display(){
push ()
strokeWeight(4)
    line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,
        this.sling.bodyB.position.x, this.sling.bodyB.position.y)
        pop ()
}
}