class Paddle{
    constructor(game){
        this.screenWidth = game.gameWidth;
        this.screenHeight = game.gameHeight;
        this.width = 150;
        this.height = 15;
        this.offset = 5;
        this.maxSpeed = 7;
        this.speed = 0; 
        this.cordinates ={
            x:(this.screenWidth - this.width)/2,
            y:this.screenHeight - this.height - this.offset
        };
    }
    draw(c){
        c.fillStyle = "#00caba";
        c.fillRect(this.cordinates.x,this.cordinates.y,this.width,this.height);
    }
    update(deltaTime){

        // required if the gameloop is called directly
        // if(!deltaTime)
        //     return;

        this.cordinates.x += this.speed; 
        if(this.cordinates.x <= 0)
            this.cordinates.x = 0;
        if(this.cordinates.x + this.width >= this.screenWidth)
            this.cordinates.x = this.screenWidth - this.width;
    }
    moveRight(){
        this.speed = this.maxSpeed;
    }
    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    stop(){
        this.speed = 0;
    }
}