class Inst{
    constructor(x,y){
     this.button = createButton("CONTINUE>>");

     this.x = x;
     this.y = y;

     this.inst = createGraphics(window.innerWidth,window.innerHeight);
     this.inst.background(0);
     this.inst.textAlign(CENTER);
     this.inst.fill(255);
     this.inst.textSize(32);
     this.inst.text("Press CONTINUE and then SPACEBAR to begin the game. Use the ARROW KEYS to move the player. Use the number keys to select the spaceship.",100,100,500);
    }

    hide(){
     this.button.hide()
     clear();
     push();
     space.display();
    }

    display(){

        this.button.position(700,350);

        push();
        translate(0,0);
        noStroke();
        texture(this.inst);
        plane(window.innerWidth,window.innerHeight);
        pop();

    }
}