fetch("/data/catalogo.json")
    .then(res => res.json())
    .then(productos => {
        const contenedor = document.getElementById("lista-productos");
        const paginacionDiv = document.getElementById("paginacion");
        const productosPorPagina = 4;
        let paginaActual = 1;

        function mostrarPagina(pagina) {
            contenedor.innerHTML = "";
            const inicio = (pagina - 1) * productosPorPagina;
            const fin = inicio + productosPorPagina;
            const productosEnPagina = productos.slice(inicio, fin);

            productosEnPagina.forEach(prod => {
                const card = document.createElement("div");
                card.classList.add("card-producto");

                card.innerHTML = `
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.descripcion}</p>
                `;

                contenedor.appendChild(card);
            });

            // Actualizar paginación
            actualizarPaginacion();
        }

        function actualizarPaginacion() {
            paginacionDiv.innerHTML = "";
            const totalPaginas = Math.ceil(productos.length / productosPorPagina);

            for (let i = 1; i <= totalPaginas; i++) {
                const boton = document.createElement("button");
                boton.textContent = i;
                boton.classList.add("btn-pagina");
                if (i === paginaActual) {
                    boton.classList.add("activo");
                }
                boton.addEventListener("click", () => {
                    paginaActual = i;
                    mostrarPagina(paginaActual);
                });
                paginacionDiv.appendChild(boton);
            }
        }

        // Mostrar primera página
        mostrarPagina(paginaActual);
    });

