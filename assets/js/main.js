document.addEventListener("DOMContentLoaded", () => {
    cargar("header", "componentes/header.html");
    cargar("footer", "componentes/footer.html");
});

function cargar(id, ruta) {
    fetch(ruta)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(err => console.error("Error cargando: ", ruta, err));
}
