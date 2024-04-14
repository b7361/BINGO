// Crear la tabla con los números del 1 al 90
var numerosContainer = document.getElementById("numeros");
for (var i = 1; i <= 90; i++) {
  var divNumero = document.createElement("div");
  divNumero.textContent = i;
  numerosContainer.appendChild(divNumero);
}

function generarNumeroAleatorio() {
  var numero = Math.floor(Math.random() * 90) + 1;
  document.getElementById("resultado").innerHTML = "" + numero;
  marcarNumero(numero);
  leerNumeroEnVoz(numero);
}

function toggleAutoGenerate() {
  var checkbox = document.getElementById("autoGenerate");
  if (checkbox.checked) {
    intervalId = setInterval(generarNumeroAleatorio, 3060);
  } else {
    clearInterval(intervalId);
  }
}

function detenerGeneracionAutomatica() {
  clearInterval(intervalId);
}

function marcarNumero(numero) {
  var numeros = document.getElementById("numeros").children;
  for (var i = 0; i < numeros.length; i++) {
    if (parseInt(numeros[i].textContent) === numero) {
      numeros[i].classList.add("marcado");
      break;
    }
  }
}

function leerNumeroEnVoz(numero) {
  var mensaje = "" + numero;
  var voz = new SpeechSynthesisUtterance(mensaje);
  voz.lang = 'es-ES'; // Establece el idioma en español
  window.speechSynthesis.speak(voz);
}
function detenerGeneracionAutomatica() {
  clearInterval(intervalId);
  document.getElementById("autoGenerate").checked = false;
}