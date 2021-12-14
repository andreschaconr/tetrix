
function initialize(){ 
    Swal.fire({title:"Bienvenido",
    html:`<br>
    <strong>Controles:</strong>
    <ul class="list-group">
    <li class="list-group-item"> <kbd>Space</kbd><br>Pausar o reanudar </li>
    <li class="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg><br>Rotar</li>
    <li class="list-group-item"> <kbd>Flechas de dirección</kbd><br>Mover figura hacia esa dirección</li>
    <li class="list-group-item"><strong>También puedes usar los botones si estás en móvil</strong></li>
    </ul>`,
    width:"80%" ,
    height: "80%" ,
    confirmButtonColor:'#5ce1e6'
    }).then(()=>{//this function star all, she is called in the html whit "onload"
        const canvas = document.getElementById('canvas'); //call to canvas for his ID
        const ctx = canvas.getContext('2d'); //generate context to draw on canvas
        ctx.scale(20, 20); // scale the point  
    
    function boardSweep() { // this function clear the rows complet and asigned  a numbre score
        let rowCount = 1;
        outer: for (let y = board.length -1; y > 0; --y) {
            for (let x = 0; x < board[y].length; ++x) {
                if (board[y][x] === 0) {
                    continue outer;
                }
            }
    
            const row = board.splice(y, 1)[0].fill(0);
            board.unshift(row); // insert new roww to array board
            ++y;
    
            player1.score += rowCount * 10; //asigned number to score
            rowCount *= 2;
        }
    }
    
    function collision(board, player1) { //this function takes the parameters board and player1 for chek the collisions
        const m = player1.matrix; //create a new cont for evalue the collisions
        const o = player1.position; //create a new cont for evalue the collisions
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                   (board[y + o.y] &&
                    board[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
    
    function createMatrix(w, h) { //this function create a matrix whit zero in all positions
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0)); //create array and assign 0 in all positionitions
        }
        return matrix;
    }
    function drawMatrix(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    ctx.fillStyle = colors[value]; //evaluates the random color of the color array to assign it to the generated pieces
                    ctx.fillRect(x + offset.x,
                                     y + offset.y,
                                     1, 1);
                }
            });
        });
    }
    
    
    function generatePieces(type) // this function create seven diferents pieces an return type "ILJOZST"
    {
        if (type === 'I') {
            return [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ];
        } else if (type === 'L') {
            return [
                [0, 2, 0],
                [0, 2, 0],
                [0, 2, 2],
            ];
        } else if (type === 'J') {
            return [
                [0, 3, 0],
                [0, 3, 0],
                [3, 3, 0],
            ];
        } else if (type === 'O') {
            return [
                [4, 4],
                [4, 4],
            ];
        } else if (type === 'Z') {
            return [
                [5, 5, 0],
                [0, 5, 5],
                [0, 0, 0],
            ];
        } else if (type === 'S') {
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        } else if (type === 'T') {
            return [
                [0, 7, 0],
                [7, 7, 7],
                [0, 0, 0],
            ];
        }
    }
    
    
    function draw() { //this function draw the piece in the board
        ctx.fillStyle = '#000'; // assignes backgroudcolor to the canvas
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawMatrix(board, {x: 0, y: 0}); //draw a board in te position x=0 y=0
        drawMatrix(player1.matrix, player1.position);
    }
    
    function merge(board, player1) { //this fuction fusion de matrix board with the canvas
        player1.matrix.forEach(function (row, y) {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        board[y + player1.position.y][x + player1.position.x] = value;
                    }
                });
            });
    }
    
    function rotate(matrix, dir) {  //this fuction rotate the pieces
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    matrix[x][y],
                    matrix[y][x],
                ] = [
                    matrix[y][x],
                    matrix[x][y],
                ];
            }
        }
    
        if (dir > 0) {
            matrix.forEach(row => row.reverse()); 
        } else {
            matrix.reverse();
        }
    }
    
    function playerDrop() { //fuction to inicialize the fall to pieces
        player1.position.y++;
        if (collision(board, player1)) {
            player1.position.y--;
            merge(board, player1);
            playerReset();
            boardSweep();
            updateScore();
        }
        counter = 0;
    }
    let pause = false;
    function playerpause(){ //this function pause the game
         
         pause = true;
         if( pause == true){
            dropInterval=5000000;
         }
         
     }
     function playerplay(){ //this function pause the game
         
        pause = false;
        if( pause == false){
           dropInterval=1000;
        }
        
    }
    
    
    function playerMove(offset) { //this fuction control the move to pieces into matrix
        player1.position.x += offset;
        if (collision(board, player1)) {
            player1.position.x -= offset;
        }
    }
    
    function playerReset() { //Fuction to reset the game
        const pieces = 'TJLOSZI';
        player1.matrix = generatePieces(pieces[pieces.length * Math.random() | 0]); //generate pieces random
        player1.position.y = 0;
        player1.position.x = (board[0].length / 2 | 0) -
                       (player1.matrix[0].length / 2 | 0);
        if (collision(board, player1)) {
            board.forEach(row => row.fill(0));
            Swal.fire({
                title: "GAME OVER",
                footer:'Presiona reset para volver a jugar',
                imageUrl :'./game over.png' ,
                imageWidth: '300px',
                imageAlt: 'Game over',
                confirmButtonText:'Reset',
                confirmButtonColor:'#5ce1e6',
                width:"80%" ,
                height: "80%"
                }
                ).then(()=>{
                    
                    player1.score = 0;
                    updateScore();})
            
            
        }
    }
    
    function playerRotate(dir) { //fuction to rotate the pieces with events
        const position = player1.position.x;
        let offset = 1;
        rotate(player1.matrix, dir);
        while (collision(board, player1)) {
            player1.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > player1.matrix[0].length) {
                rotate(player1.matrix, -dir);
                player1.position.x = position;
                return;
            }
        }
    }
    
    let counter = 0;
    let dropInterval = 1000;
    
    let lastTime = 0;
    function update(time = 0) {
        const newTime = time - lastTime;
    
        counter += newTime;
        if (counter > dropInterval) { //conditional for controle the fall of the piece every second
            playerDrop();
        }
    
        lastTime = time;
    
        draw();
        requestAnimationFrame(update);
    }
    
    function updateScore() {
        document.getElementById('score').innerText =("SCORE:  "+player1.score) ; //this function update and print the score in the score div
    }
    
    document.addEventListener('keydown',  event => {
        if (event.key== "ArrowLeft") {
            playerMove(-1);
        } else if (event.key== "ArrowRight") {
            playerMove(1);
        } else if (event.key== "ArrowDown") {
            playerDrop();
        } else if (event.key== "ArrowUp") {
            playerRotate(-1);
        }else if (event.keyCode=== 32){
            if (!pause){ 
                playerpause();
        }
        else {
            playerplay();
            
        }
    }
    
    
    });
    
    let buttonup = document.getElementById('up'); //control the move of pieces since buttons
     buttonup.onclick = function (){
        playerRotate(-1);
     }
     let buttondown = document.getElementById('down'); //control the move of pieces since buttons
     buttondown.onclick = function (){
        playerDrop();
     }
     let buttonleft = document.getElementById('left'); //control the move of pieces since buttons
     buttonleft.onclick = function (){
        playerMove(-1);
     }
     let buttonright = document.getElementById('right'); //control the move of pieces since buttons
     buttonright.onclick = function (){
        playerMove(1);
     }
     let buttonpause = document.getElementById('pause'); //pause the game
     buttonpause.onclick = function(){
         playerpause();
     }
     let buttonplay = document.getElementById('play'); //start game after pause
     buttonplay.onclick = function(){
         playerplay();
         
     }
      


    const colors = [ //colors of pieces
        null,
        '#AE3DFF',
        '#55FFE2',
        '#FF3B93',
        '#A7FD2A',
        '#FFA420',
        '#FFFF00',
        '#ff0534',
    ];
    
    const board = createMatrix(12, 20); //create board 
    
    const player1 = { //start to game
        position: {x: 0, y: 0},
        matrix: null,
        score: 0,
    };
    
    playerReset(); //new game
    updateScore(); //clar and charge score
    update(); 
    })}