class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA;
            var pointB = this.pointB;
            
           strokeWeight(4);
           // write stroke() to set the color to red
           stroke(200, 0, 0);
           // Write line() to draw a line from pointA to pointB
           line(bodyA.position.x, bodyA.position.y, pointB.x, pointB.y);
        }
    }
    
}