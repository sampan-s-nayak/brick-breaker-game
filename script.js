const canvas = document.querySelector("#gameScreen");
canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 40;
let c = canvas.getContext("2d");

//game components:
let gameInterface = new game(canvas.width,canvas.height);


//read abt this part on stacks overflow,maintains a uniform speed
let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    //animation part
    gameInterface.update(deltaTime);
    gameInterface.draw(c);

    requestAnimationFrame(gameLoop);
}
// calling this way gives valid timeStamp
requestAnimationFrame(gameLoop);
