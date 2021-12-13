// the sweetalert2 and bootstrap 
// star and manual
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
confirmButtonColor:'#5ce1e6'
});

 //Game over
 Swal.fire({
 title: "GAME OVER",
 footer:'Presiona reset para volver a jugar',
 imageUrl :'./img.png/game over.png' ,
 imageWidth: '300px',
 imageAlt: 'Game over',
 confirmButtonText:'Reset',
 confirmButtonColor:'#5ce1e6',
 width:"70%" 
 }
 )