class Bg{
    constructor(){

        this.image = loadImage("source/background.jpg");

    }

    display(){

        push();
        noStroke();
        translate(0,0,-2000);
        texture(this.image);
        plane(window.innerWidth * 7, window.innerHeight * 7);
        pop();

    }
}