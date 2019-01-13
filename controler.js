class controller{
    constructor(paddle,game){
        document.addEventListener("keydown",(event)=>{
        switch(event.keyCode){
            case 39:
                paddle.moveRight();
                break;

            case 37:
                paddle.moveLeft();
                break;
            
            case 32:
                game.togglePause();
                break;
        }
        });

        document.addEventListener("keyup",(event)=>{
            switch(event.keyCode){
                case 39:
                    //to make sure that the paddle is 
                    //moving in the direction specified by key down
                    if(paddle.speed > 0)
                        paddle.stop();
                    break;
    
                case 37:
                    if(paddle.speed < 0)
                        paddle.stop();
                    break;
            }
            });
    }
}