let GAME_STATE = {
    running:0,
    won:1,
    lost:2,
    pause:3
};

class game{
    constructor(gameWidth,gameHeight){
        this.gameState = GAME_STATE.running;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.yPos = 0;
        this.brickWidth = 85;
        this.brickHeight = 35;
        this.brick = [];
        for(let i=0;i<3;i++){
            for(let j=0;j<this.gameWidth/this.brickWidth;j++){

                let tempBrick = new Brick(0+this.brickWidth*j,
                    this.yPos,
                    this.brickWidth,
                    this.brickHeight);

                this.brick.push(tempBrick);
            }
            this.yPos += this.brickHeight;
        }

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        //to link the controller:
        new controller(this.paddle,this);
    }
    update(deltaTime){
        if(this.gameState != GAME_STATE.running){
            return;
        }

        this.paddle.update(deltaTime);
        this.ball.updatePaddlePos(this.paddle);
        this.gameState = this.ball.update(deltaTime);

        this.brick.forEach(brick => {
             brick.update(deltaTime,this.ball);
        });

        if(numberOfDestroyedBricks == this.brick.length)
            this.gameState = GAME_STATE.won;
    }
    draw(c){
        c.clearRect(0,0,this.gameWidth,this.gameHeight);
        this.paddle.draw(c);
        this.ball.draw(c);

        this.brick.forEach(brick => {
            brick.draw(c);
        });

        //pause screen
        if(this.gameState == GAME_STATE.pause){
            this.showMessage("paused",c);
        }
        //win state
        if(this.gameState == GAME_STATE.won){
            this.showMessage("victory",c);
        }
        //you loose msg
        if(this.gameState == GAME_STATE.lost){
            this.showMessage("You Loose",c);
        }
    }  
    togglePause(){
        if(this.gameState == GAME_STATE.pause)
            this.gameState = GAME_STATE.running;
        else{
            this.gameState = GAME_STATE.pause;
        }
    } 
    showMessage(message,c){
        c.fillStyle = "rgba(0,0,0,0.3)";
        c.fillRect(0,0,this.gameWidth,this.gameHeight);
        c.fillStyle = "#ffff";
        c.font = "40px aerial";
        c.fillText(message,this.gameWidth/2,this.gameHeight/2);
    }
};