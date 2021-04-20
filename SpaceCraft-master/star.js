class Star{
    constructor(){
      this.x = random(-1000,1000);
      this.y = random(-800,800);
      this.z = random(-500,-1000);

      this.alpha = 0;
    }

    display(){
     push();
     translate(this.x,this.y,this.z);
     fill(this.alpha);
     noStroke();
     sphere(5);
     pop();

     this.alpha += 1;

     if(this.alpha == 255){
         this.alpha = 255;
     }
    }
}