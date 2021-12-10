let canvas; // canvas
let ctx; // context





function initialize(){ // function to satar all
    canvas= document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.scale(20,20);
    
}


