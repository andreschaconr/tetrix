let canvas; // canvas
let ctx; // context


function initialize(){ // function to satar all
    canvas= document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.scale(20,20);  // scale the point 
    update();
    
};

function draw() {  //this function draw the piece in the board
    ctx.fillStyle = '#000'; //color of board
    ctx.fillRect(0, 0, canvas.width, canvas.height); //draw the board according to the width and height of the canvas
    drawPiece(player1.piece, player1.position); // call tne fuction drawpiece
};


  const piece =[ 
      [0,0,0],
      [1,1,1],
      [0,1,0],
  ];

function drawPiece(piece, offset){ //This function adds color to the objects in the array !== 0
piece.forEach((row, y) =>{    
    row.forEach((value, x) =>{
        if( value !== 0){
        ctx.fillStyle ="blue";
        ctx.fillRect(x + offset.x,
                     y + offset.y ,1,1); //validation to move the piece later, and change the psition
    }
 });
});
};

const player1 ={
    position: {x:5,y:3},
    piece : piece,
}


function update(){ //this function update the board and call the fuction draw
    draw();
    requestAnimationFrame(update);

};
