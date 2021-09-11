let inputUsuario = prompt("Por favor, ingrese su nombre");
const bienvenida = document.getElementById("bienvenida");


const textoBienvenida = document.createElement("h1");
textoBienvenida.id = "textoBienvenida";


textoBienvenida.innerHTML = "Bienvenid@ a nuestra tienda, " + inputUsuario;

document.body.appendChild(textoBienvenida);

bienvenida.insertAdjacentElement("beforebegin", textoBienvenida)