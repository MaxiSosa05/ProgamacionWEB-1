
 var fechaYHoraActual = new Date();
 var horaActual = fechaYHoraActual.getHours();
 
var  mensaje = "";

if (horaActual > 7 && horaActual < 13){
    mensaje = "Buenos dias 😊📚."
}
else if ( horaActual > 13 && horaActual < 19){
    mensaje = "Buenas tardes 😊📚."
}
else{
    mensaje = "Buenas noches 😊📚."
}

function saludo() {
    let nombre = prompt("¿Cómo te llamás?");
    if (nombre) {
      alert(`¡Hola ${nombre}! ${mensaje}`);
    } else {
      alert("¡Hola! " + mensaje);
    }
  }

//zoom para las imagenes

const imagenes = document.querySelectorAll('.zoom-libro');

imagenes.forEach((img) => {
  
  img.addEventListener('mouseenter', () => {
    img.classList.add('zoom-activo');
  });

  
  img.addEventListener('mouseleave', () => {
    img.classList.remove('zoom-activo');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonComprar = document.getElementsByClassName('comprar');

  for (let btn of buttonComprar){
    btn.addEventListener('click', function(event){
      const parent = event.target.closest('.section_1_div_cont')
      const img = parent.querySelector('img');
      const title = parent.querySelector('h3');
      const author = parent.querySelector('.h3_autor');
      
      const data = {
        src: img.getAttribute('src'),
        title: title.textContent,
        author: author.textContent
      }
      sessionStorage.setItem('detalle', JSON.stringify(data));
      window.location.href = 'libro-especif.html'
     
    })

  }
})