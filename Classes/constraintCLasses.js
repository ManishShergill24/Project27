class join{
constructor(object1,xyobject){

var option={

    bodyA: object1,
    pointB: xyobject,
    stiffness: 1,
    length: 200

}
this.pointB=xyobject;

this.lines = Constraint.create(option);
World.add(world,this.lines)


}

display(){

    var PointA = this.lines.bodyA.position;
    var PointB = this.pointB;

    stroke("white")
    strokeWeight(7);
    line(PointA.x,PointA.y,PointB.x,PointB.y);

}
}