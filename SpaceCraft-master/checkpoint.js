class Checkpoint{
    constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;
     this.r = 500;
    }

    update(r){
      this.r = r;
    }

    display(){
      push();
      translate(this.x,this.y,this.z);
      fill(100);
      stroke(0);
      strokeWeight(0.7);
      rotateY(millis()/2000);
      rotateX(millis()/1000);
      rotateZ(millis()/2500);
      sphere(this.r);
      pop();
    }
}