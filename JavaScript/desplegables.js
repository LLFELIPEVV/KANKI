
document.getElementById("btn_comentarios").addEventListener("click", open_comentarios);

let comentarios = document.getElementById("espacio_comentarios");

function open_comentarios() {
    comentarios.classList.toggle("espacio_comentarios");
}

document.getElementById("btn_listas_reproduccion").addEventListener("click", open_listas_reproduccion);

let reproduccion = document.getElementById("espacio_listas_reproduccion");

function open_listas_reproduccion() {
    reproduccion.classList.toggle("abrir_listas");
}

document.getElementById("btn_videos_similares").addEventListener("click", open_videos_similares)

let similares = document.getElementById("videos_similares");

function open_videos_similares() {
    similares.classList.toggle("abrir_videos_similares")
}