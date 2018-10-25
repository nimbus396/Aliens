
/*
 *    Name: missileClass.js
 * Purpose: fire a missile at the enemy
 */


// Name the class
this.missleImg = new Image;
this.missleImg.src = "images/shot.png";

class Missle { 
    constructor() {
        this.isAlive=1;
        this.x = 0;
        this.y = 0;
    }

    // We need a way to set X
    setX(val) {
        this.x=val;
    }

    // We need a way to set y
    setY(val) {
        this.y=val;
    }

    // We need a way to get X
    getX() {
        return this.x;
    }

    // We need a way to get Y
    getY() {
        return this.y;
    }

    // Image height
    getHeight() {
        return missleImg.height;
    }

    // Get the current canvas and draw a filled rectangle
    draw() {
        var canvas=document.getElementById("gameBoard");
        var ctx=canvas.getContext("2d");
        ctx.drawImage(missleImg,this.x,this.y);
    }

    dummy(val, that) {
        that.draw();
        that.y-=5; 
        if(that.y<=0) {
            clearInterval(val);
        }
        for(var i=0; i<Aliens.length; i++) {
            if (that.x < Aliens[i][1]+ ox + Aliens[i][0].get_Width() &&
                    that.x + missleImg.width > Aliens[i][1] + ox &&
                    that.y < Aliens[i][2] + oy + Aliens[i][0].get_Height() &&
                    that.y + missleImg.height > Aliens[i][2] + oy &&
                    Aliens[i][0].get_isAlive() == 1) {
                Aliens[i][0].set_isAlive(0);
                clearInterval(val);
                break;
            }
        }

    }
    // Move the Missile
    move(xPos,yPos) { 
        this.x=xPos; 
        this.y=yPos;
        var that=this;
        var intervalId=setInterval(function() {
                that.dummy(intervalId, that);
                }
                ,2);
    }
}
