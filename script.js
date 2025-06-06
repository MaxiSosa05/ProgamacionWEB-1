
 var fechaYHoraActual = new Date();
 var horaActual = fechaYHoraActual.getHours();
 
var  mensaje = "";

if (horaActual > 7 && horaActual < 13){
    mensaje = "Buenos dias."
}
else if ( horaActual > 13 && horaActual < 19){
    mensaje = "Buenas tardes."
}
else{
    mensaje = "Buenas noches."
}

function saludo() {
    let nombre = prompt("¿Cómo te llamás?");
    if (nombre) {
      alert(`¡Hola! ${nombre} ${mensaje}`);
    } else {
      alert("¡Hola! " + mensaje);
    }
  }

