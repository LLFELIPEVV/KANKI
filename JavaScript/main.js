//Mostrar y ocultar la barra de opciones
//Ejecutar funcion evento click
document.getElementById("btn_close").addEventListener("click", open_close_menu);

//Declaramos variables
var container = document.getElementById("side_menu");
var barra_de_opciones = document.getElementById("barra_de_opciones");

//Evento para mostrar y ocultar la barra
function open_close_menu() {
  container.classList.toggle("abrir");
  barra_de_opciones.classList.toggle("visible");
}

//Mostrar y ocultar la imagen de perfil y el boton de inicio de sesion
//Ejecutar funcion evento click
document.getElementById("btn_sesion2").addEventListener("click", open_close_img_text);

//Declaramos variables
var img_iniciar_sesion = document.getElementById("img_sesion");
var btn_iniciar_sesion = document.getElementById("btn_sesion");

//Evento para mostrar y ocultar la barra
function open_close_img_text() {
  img_iniciar_sesion.classList.toggle("avatar");
  btn_iniciar_sesion.classList.toggle("sin_texto");
}

//Muestra y oculta la seccion de listas de reproduccion
//Ejecutar funcion evento click
document.getElementById("btn_desplegar1").addEventListener("click", open_close_listas_reproduccion);

//Declaramos variables
var listas_reproduccion = document.getElementById("listas_reproduccion");

//Evento para mostrar y ocultar la barra
function open_close_listas_reproduccion() {
  listas_reproduccion.classList.toggle("desplegar_listas");
}

//Muestra y oculta la seccion de canales
//Ejecutar funcion evento click
document.getElementById("btn_desplegar2").addEventListener("click", open_close_canales);

//Declaramos variables
var canales = document.getElementById("seccion_canales");

//Evento para mostrar y ocultar la barra
function open_close_canales() {
  canales.classList.toggle("desplegar_canales");
}

//filtro de busqueda
//Ejecutar funcion evento click
document.getElementById("btn_filtro").addEventListener("click", open_close_filtros);

//Declaramos variables
var filtro = document.getElementById("filtros");

//Evento para mostrar y ocultar la barra
function open_close_filtros() {
  filtro.classList.toggle("sin-filtro");
  console.log(filtro);
  console.log(sin-filtro);
}

//calendario
//Ejecutar funcion evento click
document.getElementById("btn_calendario").addEventListener("click", open_close_calendario);

//Declaramos variables
var calendario = document.getElementById("calendario");

//Evento para mostrar y ocultar la barra
function open_close_calendario() {
  calendario.classList.toggle("abrir_calendario");
  console.log(calendario);
}