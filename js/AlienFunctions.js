/*
 * Initial load of the aliens
 */
function loadAliens() {
    for(var i=0; i < 10; i++) {
        for(var j=0; j<7; j++) {
            Aliens.push([new Alien(), i*OFFSET, j*OFFSET]);
            Aliens[i][0].set_isAlive(1);
        }
    }
}

// Print only the aliens who are alive (isAlive)
function printAliens(offSetX, offSetY) {
    for(var a=0; a<Aliens.length; a++) {
        if(Aliens[a][0].get_isAlive()==1) {
            Aliens[a][0].draw(Aliens[a][1]+offSetX, Aliens[a][2]+offSetY);
        }
    }
}

// Check the number of aliens left
function checkLeft() {
    var count=0;
    for(var a=0; a<Aliens.length; a++) {
        if(Aliens[a][0].get_isAlive()==1) {
            count++; 
        }
    }
    return count;
}

// Check 'ox' to see if we hit the screen boundry
function checkOX(val) {
    for(var a=0; a<Aliens.length; a++) {
        if(Aliens[a][0].get_isAlive()==1) {
            if(Aliens[a][1]+ox>=val) {
                direction=-1;
                oy+=28;
                break;
            }
            if(Aliens[a][1]+ox<=0) {
                direction=1;
                oy+=28;
                break;
            }
        }
    }
}
// Check if Aliens have hit the bottom
function checkOY(val) {
    var count=0
        for(var a=0; a<Aliens.length; a++) {
            if(Aliens[a][0].get_isAlive()==1) {
                if(Aliens[a][2]+oy>=val) {
                    count=1;
                    break;
                }
            }
        }
    return count;
}

// Tell the user they have won the game
function youWin() {
    console.log("you win!");
}

// Tell the user they have lost the game
function youLose() {
    console.log("you lose!");
}

// Keeps the Aliens Moving on the screen
function alienTimer() {
    setTimeout(
            function() {

            /*
             * When the timer runs out, the rectangle is removed.
             * This assumes the canvas is white.  After the rectangle
             * is removed, we call draw() to draw in a new position.
             */

            var canvas=document.getElementById("gameBoard");
            var ctx=canvas.getContext("2d");

            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(0,0,canvas.width,canvas.height-base.getHeight());
            ox+=10*direction;
            checkOX(canvas.width-OFFSET);

            printAliens(ox,oy);
            base.draw();

            if(checkOY(canvas.height)) {
                youLose();
            }
            else {
                if(checkLeft() > 0) 
                    alienTimer();
                else
                    youWin();
            }
            }
    , alienSpeed
        );
}

// Load base at bottom of screen
function loadBase() {
    var canvas=document.getElementById("gameBoard");

    base=new Base();    
    base.setX(canvas.width/2);
    base.setY(canvas.height-base.getHeight());
    base.draw();
}

// Canvas key processing
function canvasListen() {
    canvas=document.getElementById("gameBoard");
    canvas.focus();
    canvas.addEventListener('keydown',keydown_handler,false);
}

// keypress for canvas
function keydown_handler(e) {

    switch (e.keyCode) {
        case 37:
            base.setX(base.getX()-5); 
            break;
        case 39:
            base.setX(base.getX()+5);
            break;
        case 32:
            var missle=new Missle();
            missle.move(base.getX(),base.getY());
        default:
            //alert(e.keyCode);
            break;
    }
}
