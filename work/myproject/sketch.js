function setup() {
    createCanvas(680, 480);
}

class Asan{
    constructar(x,y){
        this.x=x;
        this.y=y;
    }

    moveRight(){
        this.x++;
    }
}

class Bsan{
    constructar(x,y){
        this.x=x;
        this.y=y;
    }

    moveRight(){
        this.x += 1.5;
    }
}
var a_san=new Asan(50,100);
var b_san=new Bsan(0,100);

function draw() {
    line(0,100,200,100);//(x1,y1,x2,y2)
  //ellipse(50, 50, 80, 80);
    ellipse(b_san.x, b_san.y, 10, 10);// Bさん
    b_san.moveRight();

    ellipse(a_san.x, a_san.y, 10, 10);// Aさん
    a_san.moveRight();

    ellipse(150, 100, 40, 40);// 駅
}



