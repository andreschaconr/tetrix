//Location on the keyboard
var teclas = {
 UP: 38,
 DOWN: 40,
 LEFT: 37,
 RIGHT: 39,
 PAUSE:32
 };
 //Play and pause conditional
let gameStatus = true;
 //event of click and touch
 function dibujarTeclado (evento){
     
    if(evento.keyCode == teclas.UP||evento == teclas.UP){
        console.log("arriba")
    }
    if(evento.keyCode == teclas.DOWN||evento == teclas.DOWN){
        console.log("abajo")
    }  
    if(evento.keyCode == teclas.LEFT||evento == teclas.LEFT){
        console.log("izquierda")
    }
    if(evento.keyCode == teclas.RIGHT||evento == teclas.RIGHT){
        console.log("derecha")
    }
    //conditional of pause and play
    if(evento.keyCode == teclas.PAUSE||evento == teclas.PAUSE){
        gameStatus = !gameStatus;
        console.log("pausar")
        console.log("Game status =", gameStatus)

    }
    

}

  document.addEventListener("keydown", dibujarTeclado)

  

