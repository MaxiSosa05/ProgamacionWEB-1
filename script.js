

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

// Modo oscuro

const B_oscuro = document.getElementById('Oscuro'); // llamo el boton

function cambiarTema() {
    const link = document.getElementById("estilo"); // accedo a la etiqueta link
    const temaActual = link.getAttribute("href");   //accedo al atributo href

    if (temaActual === "PROWEB1.css") {         // si es uno lo cambio por otro etc...
        link.setAttribute("href", "Oscuro.css");
    } else {
        link.setAttribute("href", "PROWEB1.css");
    }
}

B_oscuro.addEventListener("click" , cambiarTema); // le agrego el evento al buton