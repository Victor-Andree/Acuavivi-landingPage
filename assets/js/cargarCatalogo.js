fetch("/src/data/catalogo.json")
    .then(res => res.json())
    .then(productos => {
        const contenedor = document.getElementById("lista-productos");

        productos.forEach(prod => {
            const card = document.createElement("div");
            card.classList.add("card-producto");

            card.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <span class="precio">S/ ${prod.precio}</span>
            `;

            contenedor.appendChild(card);
        });
    });
