/*
 *    Name: AlienClass.js
 * Purpose: The code creates a rectangle that bounces from side to side
 *          on a canvas.
 */

// Global Variable for our alien.  We call here so we only load the imageonce.
this.img = new Image;
this.img.src = "images/alien1.png";

// Name the class
class Alien { 
    constructor() {
        this.isAlive=1;
    }
    // We need a way to say if the alien is alive or dead
    set_isAlive(val) {
        this.isAlive=val;
    }

    // We need a way to see if the alien is alive or dead
    get_isAlive() {
        return this.isAlive;
    }

    // Image Width
    get_Width() {
        return img.width;
    }

    // Image height
    get_Height() {
        return img.height;
    }

    // Get the current canvas and draw a filled rectangle
    draw(x,y) {
        var canvas=document.getElementById("gameBoard");
        var ctx=canvas.getContext("2d");
        ctx.drawImage(img,x,y);
    }
}
