

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

     if (temaActual === "PROWEB1.css") { // si el tema actual es el claro
        link.setAttribute("href", "Oscuro.css"); // aplico el tema oscuro
        localStorage.setItem("tema", "oscuro"); // guardo la preferencia en localStorage
    } else {
        link.setAttribute("href", "PROWEB1.css"); // aplico el tema claro
        localStorage.setItem("tema", "claro"); // guardo la preferencia en localStorage
    }
}


function aplicarTema() {
    const temaGuardado = localStorage.getItem("tema"); // obtengo el tema guardado

    const link = document.getElementById("estilo");
    if (temaGuardado === "oscuro") {
        link.setAttribute("href", "Oscuro.css"); // si está guardado como oscuro, aplico el tema oscuro
    } else {
        link.setAttribute("href", "PROWEB1.css"); // si está guardado como claro, aplico el tema claro
    }
}

// Aplicamos el tema al cargar la página
document.addEventListener("DOMContentLoaded", aplicarTema);

B_oscuro.addEventListener("click" , cambiarTema); // le agrego el evento al buton