class Player{
    constructor(z){
       this.player;
       this.xdir = 15;
       this.ydir = 150;
       this.zdir = z;

       this.playermodel = loadModel("source/sphere.obj",true);
    }

    ship1(){
      this.playermodel = loadModel("source/sphere.obj",true);
    }

    ship2(){
      this.playermodel = loadModel("source/DoubleCone.obj",true);
    }

    ship3(){
      this.playermodel = loadModel("source/middleCylinder.obj",true);
    }

    ship4(){
      this.playermodel = loadModel("source/sphereSided.obj",true);
    }

    jump(){
      if(this.ydir === 150){
       this.ydir -= 300;
      }
    }

    fall(){
      if(this.ydir < 150 ){
        this.ydir += 5;
      }else if(this.ydir === 150){
        this.ydir += 0;
      }
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }

    display(){
      colorMode(RGB);

      push();
      translate(this.xdir,this.ydir,this.zdir);
      scale(0.7);
      rotateX(millis()/800)
      fill(153,0,153);
      stroke(0);  
      strokeWeight(0.7)    
      model(this.playermodel);
      pop();
    }
}