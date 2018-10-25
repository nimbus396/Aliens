
/*
 *    Name: baseClass.js
 * Purpose: base is the image at the bottom of the screen
 */

// Global Variable for our alien.  We call here so we only load the imageonce.

// Name the class
this.baseImg = new Image;
this.baseImg.src = "images/base.png";

class Base { 
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
        return baseImg.height;
    }

    // Get the current canvas and draw a filled rectangle
    draw() {
        var canvas=document.getElementById("gameBoard");
        var ctx=canvas.getContext("2d");
        ctx.drawImage(baseImg,this.x,this.y);
        this.clear();
    }

    clear() {
        var canvas=document.getElementById("gameBoard");
        var ctx=canvas.getContext("2d");
        ctx.fillStyle="#FFFF00";
        ctx.fillRect(0,this.getY(),this.getX(),baseImg.height);
        ctx.fillRect(this.getX()+baseImg.width,this.getY(),canvas.width-this.getX(),baseImg.height);
    }
}
