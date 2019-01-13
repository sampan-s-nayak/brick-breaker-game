let numberOfDestroyedBricks = 0;

class Brick{
    constructor(x,y,width,height){
        this.position = {
            x:x,
            y:y
        };
        this.width = width;
        this.height = height;
        this.brick = document.getElementById("brick");
        this.flag = 1;
    }
    draw(c){
        if(this.flag == 1)
            c.drawImage(this.brick,this.position.x,
                this.position.y,this.width,this.height);
    }
    update(deltaTime,ball){
        if(this.flag == 0){
            return;
        }

        if(ball.position.x + ball.ballWidth >= this.position.x 
            && ball.position.x + ball.ballWidth <= this.position.x
            + this.width 
            && ball.position.y + ball.ballHeight >= this.position.y
            && ball.position.y + ball.ballHeight <= this.position.y
            + this.height){
                this.flag = 0;
                ++numberOfDestroyedBricks;
                ball.speed.y = -ball.speed.y;
            }
    }
};