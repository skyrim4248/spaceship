class Obstacle{
   constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;

     this.obsModel = loadModel("source/obstacle.obj",true);
   }

   display(){
       colorMode(RGB);
       push();
        translate(this.x,this.y,this.z);
        fill(255,10,10);
        scale(0.5);
        stroke(255,255,255);
        strokeWeight(0.5);
        rotateY(millis()/500);
        rotateX(millis()/1000);
        rotateY(millis()/1500);
        model(this.obsModel);
       pop();
   }
}