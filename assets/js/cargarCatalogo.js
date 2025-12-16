const SHEET_ID = "1FiYGv3TJEQHlyVryMmOuutQvKDZQ1kHMXqtVEEUHta8";
const SHEET_NAME = "Hoja 1";
const API_URL = `https://opensheet.elk.sh/${SHEET_ID}/${encodeURIComponent(SHEET_NAME)}`;

fetch(API_URL)
    .then(res => res.json())
    .then(productos => {

        console.log("DATA:", productos);

        const contenedor = document.getElementById("lista-productos");
        const paginacionDiv = document.getElementById("paginacion");

        const productosPorPagina = 4;
        let paginaActual = 1;

        function normalizarDisponible(valor) {
            return valor && valor.trim().toLowerCase() === "si";
        }

        function mostrarPagina(pagina) {
            contenedor.innerHTML = "";

            const inicio = (pagina - 1) * productosPorPagina;
            const fin = inicio + productosPorPagina;
            const productosEnPagina = productos.slice(inicio, fin);

            productosEnPagina.forEach(prod => {
                const disponible = normalizarDisponible(prod.disponible);

                const card = document.createElement("div");
                card.classList.add("card-producto");

                card.innerHTML = `
                    <div class="badge ${disponible ? "verde" : "rojo"}">
                        ${disponible ? "Disponible" : "No disponible"}
                    </div>

                    <img src="${prod.imagen?.trim()}" alt="${prod.nombre}">

                    <h3>${prod.nombre}</h3>
                    <p>${prod.descripcion || ""}</p>
                `;

                contenedor.appendChild(card);
            });

            actualizarPaginacion();
        }

        function actualizarPaginacion() {
            paginacionDiv.innerHTML = "";
            const totalPaginas = Math.ceil(productos.length / productosPorPagina);

            for (let i = 1; i <= totalPaginas; i++) {
                const boton = document.createElement("button");
                boton.textContent = i;
                boton.classList.add("btn-pagina");

                if (i === paginaActual) boton.classList.add("activo");

                boton.addEventListener("click", () => {
                    paginaActual = i;
                    mostrarPagina(paginaActual);
                });

                paginacionDiv.appendChild(boton);
            }
        }

        mostrarPagina(paginaActual);
    })
    .catch(error => {
        console.error("Error cargando catálogo:", error);
    });
