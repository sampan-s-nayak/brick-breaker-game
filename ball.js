class Ball{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.ball = document.getElementById("ball");
        this.ballWidth = 27;
        this.ballHeight = 27;
        this.position = {
            x:10,
            y:((3*game.brickHeight) + 10)
        };
        this.speed ={
            x:4,
            y:4
        }
    }
    draw(c){
        c.drawImage(this.ball,
                    this.position.x,
                    this.position.y,
                    this.ballWidth,
                    this.ballHeight);
    }
    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //top wall collision
        if( this.position.y <= 0){
            this.speed.y = -this.speed.y;
        }

        //collision with paddle
        if(this.position.y >= this.paddlePosY ){
            if(this.position.x >= this.paddleMinWidth 
                && this.position.x <= this.paddleMaxWidth)
                {
                    this.speed.y = -this.speed.y;
                }
            // no collision situation
            if(this.position.y + this.ballHeight >= this.gameHeight){
                return GAME_STATE.lost;
            }
        }

        //collision with right and left wall
        if(this.position.x + this.ballWidth >= this.gameWidth 
            || this.position.x <= 0){
            this.speed.x = -this.speed.x;
        }
        return GAME_STATE.running;
    }
    // for collision detection
    updatePaddlePos(paddle){
        this.paddlePosY = paddle.cordinates.y - this.ballHeight;
        this.paddleMinWidth = paddle.cordinates.x - this.ballWidth;
        this.paddleMaxWidth = this.paddleMinWidth + paddle.width;
    }
}