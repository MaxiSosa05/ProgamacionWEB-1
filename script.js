const librosPrecios = {
  "Meditaciones": 35000,
  "Sobre la vida feliz": 25000,
  "Filosofia como nunca la viste": 42000,
  "La ultima guarida de Hitler": 59000,
  "El Eternauta": 32000,
  "El arte de la guerra": 55000,
  "La vuelta al mundo en 80 dias": 45000,
  "Don Quijote de la mancha": 53000,
  "El Principe": 48000,
  "Habitos Atomicos": 38000,
  "El hombre en busaca de sentido": 47000,
  "La guerra de los cielos": 51000,
  "Robin Wood": 54000,
  "La Sirenita": 26000,
  "Besos de Cristal": 31000,
  "La ultima Guarida de Hitler": 59000,
  "Cuentos de los hermanos Grimm": 30000,
  "La odisea": 34000
};

const librosDescripcion = {
  "Meditaciones": "Reflexiones filosóficas sobre la vida y el comportamiento humano de Marco Aurelio.",
  "Sobre la vida feliz": "Reflexiones de Séneca sobre cómo alcanzar una vida plena y satisfactoria.",
  "Filosofia como nunca la viste": "Una visión moderna y accesible de la filosofía clásica.",
  "La ultima guarida de Hitler": "Un análisis sobre el final del régimen nazi en la Alemania de Hitler.",
  "El Eternauta": "Una famosa historieta argentina que relata la lucha por sobrevivir en un mundo invadido por extraterrestres.",
  "El arte de la guerra": "Clásico texto de Sun Tzu sobre estrategias militares aplicables también a la vida cotidiana.",
  "La vuelta al mundo en 80 dias": "La famosa novela de aventuras de Julio Verne sobre el viaje de Phileas Fogg alrededor del mundo.",
  "Don Quijote de la mancha": "La historia de un caballero que, tras leer demasiados libros de caballería, decide embarcarse en sus propias aventuras.",
  "El Principe": "Un tratado sobre el poder político y cómo mantener el control, escrito por Nicolás Maquiavelo.",
  "Habitos Atomicos": "Un libro sobre cómo hacer pequeños cambios para lograr hábitos duraderos y mejorar tu vida.",
  "El hombre en busaca de sentido": "Viktor Frankl relata su experiencia en campos de concentración y su teoría psicológica sobre el sentido de la vida.",
  "La guerra de los cielos": "Una historia épica que mezcla mitología y ciencia ficción sobre una guerra entre dioses y humanos.",
  "Robin Wood": "Una serie de cómics que narra las aventuras de un joven en un mundo fantástico lleno de magia y criaturas mitológicas.",
  "La Sirenita": "El cuento clásico de Hans Christian Andersen sobre una sirena que sueña con ser humana.",
  "Besos de Cristal": "Una novela de amor y desamor que explora los sentimientos humanos a través de los ojos de sus personajes.",
  "La ultima Guarida de Hitler": "Otra mirada histórica a los últimos días del régimen nazi y la caída de Berlín.",
  "Cuentos de los hermanos Grimm": "Una colección de cuentos clásicos como 'Cenicienta', 'Blancanieves', y 'Caperucita Roja'.",
  "La odisea": "El épico viaje de Odiseo, un héroe griego que intenta regresar a su hogar tras la Guerra de Troya."
};



function irALibroEspecif(){ 

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
        author: author.textContent,
        descrip: librosDescripcion[title.textContent],
        precio: librosPrecios[title.textContent]
      }
      sessionStorage.setItem('detalle', JSON.stringify(data));
      window.location.href = 'libro-especif.html'
     
    })

  }
}



document.addEventListener('DOMContentLoaded', irALibroEspecif);

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