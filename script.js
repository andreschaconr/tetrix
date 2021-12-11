let canvas; // canvas
let ctx; // context


function initialize(){ // function to satar all
    canvas= document.getElementById("canvas"); // call "canvas" for it ID
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
                     y + offset.y ,1,1); //validation to move the piece later, and change the position
    }
 });
});
};

const player1 ={
    position: {x:5,y:0}, //parameters for drawpiece function
    piece : piece,
}
document.addEventListener("keydown",function(keyboard){
    if(keyboard.key== "ArrowUp"){
        //player1.position.  arriba();
    }
    if(keyboard.key== "ArrowDown"){
        player1.position.y++;
        counter=0;
    }
    if(keyboard.key== "ArrowLeft"){
        player1.position.x--;
    }
    if(keyboard.key== "ArrowRight"){
        player1.position.x++;
    }
});








let counter =0;  // these variables contain the information to control the time when the piece falls
let interval =1000; // this variable control that it's only one second
let lastime = 0;


function update(time = 0){ //this function update the board and call the fuction draw
   const newtime = time - lastime;
   lastime= time;

   counter += newtime;
   if (counter>interval){ //conditional for controle the fall of the piece every second
       player1.position.y++;
       counter=0;
   }
  


    draw();
    requestAnimationFrame(update);
   
}

