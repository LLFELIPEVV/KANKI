//modo diurno
document.getElementById("diurno").addEventListener("click", modo_diurno);

//Evento para mostrar y ocultar la barra
function modo_diurno(href) {
    document.getElementById("estilos").href = "diurno.css";
};

//modo nocturno
document.getElementById("nocturno").addEventListener("click", modo_nocturno);

function modo_nocturno(href) {
    document.getElementById("estilos").href = "nocturno.css";
};