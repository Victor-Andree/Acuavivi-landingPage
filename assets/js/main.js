document.addEventListener("DOMContentLoaded", () => {
    cargar("header", "componentes/header.html");
    cargar("footer", "componentes/footer.html");
    
    // Agregar evento de animación de peces al cambiar de página
    setTimeout(() => {
        agregarAnimacionesNavegacion();
    }, 500);
});

function cargar(id, ruta) {
    fetch(ruta)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
            // Re-agregar eventos después de cargar el header
            setTimeout(() => {
                agregarAnimacionesNavegacion();
            }, 100);
        })
        .catch(err => console.error("Error cargando: ", ruta, err));
}

// Función para agregar animaciones a los enlaces de navegación
function agregarAnimacionesNavegacion() {
    // Seleccionar todos los enlaces internos: en el nav, footer y logo
    const navLinks = document.querySelectorAll('nav ul li a, .logo, footer a[href*=".html"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // No mostrar animación si ya estamos en la misma página o si es un enlace externo
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.includes(window.location.pathname.split('/').pop())) {
                e.preventDefault();
                
                // Mostrar animación de peces
                if (typeof fishAnimation !== 'undefined') {
                    fishAnimation.createFishAnimation(2500); // 2.5 segundos de animación
                    
                    // Redirigir después de la animación
                    setTimeout(() => {
                        window.location.href = href;
                    }, 2500);
                } else {
                    // Si no existe la animación, navegar directamente
                    window.location.href = href;
                }
            }
        });
    });
}
