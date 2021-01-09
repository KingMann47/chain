class Chain{

 constructor(){

    var options={
        bodyA: bird.body,
        bodyB: log6.body,
        stiffness:0.04,
        length:10
    }
  
  this.chain=Constraint.create(options);
    
  World.add(world,this.chain) 
 }

display(){
    var pointA= this.chain.bodyA.position;
    var pointB= this.chain.bodyB.position;
    strokeWeight(6);
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    
    
}



 
}