class Coin{
    constructor(x,y,z){

        this.x = x;
        this.y = y;
        this.z = z;
        this.coin = loadModel("source/coin.obj");

    }

    display(){
        colorMode(RGB);
        push();
        translate(this.x,this.y,this.z);
        fill(255,255,0);
        stroke(0);
        strokeWeight(0.2);
        scale(30);
        rotateY(millis()/500);
        model(this.coin);
        pop();

    }
}