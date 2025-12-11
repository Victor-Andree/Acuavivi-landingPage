// ========== FISH ANIMATION ========== 

class FishAnimation {
    constructor() {
        this.isPlaying = false;
        this.fishEmojis = ['🐠', '🐟', '🐡', '🦑', '🦈', '🐙'];
        this.fishModes = ['fish-right', 'fish-left', 'fish-diagonal-down', 'fish-diagonal-up'];
    }

    // Crear la animación de peces
    createFishAnimation(duration = 4000) {
        if (this.isPlaying) return;
        
        this.isPlaying = true;

        // Crear contenedor principal
        const container = document.createElement('div');
        container.className = 'fish-container';
        container.id = 'fishAnimation';

        // Crear wrapper para los peces
        const wrapper = document.createElement('div');
        wrapper.className = 'fish-animation-wrapper';

        // Agregar contenedor central con peces cargando
        const centerContainer = document.createElement('div');
        centerContainer.className = 'fish-loading-center';

        // Crear 3 peces en el centro
        const centerFishEmojis = ['🐠', '🐟', '🐡'];
        centerFishEmojis.forEach((emoji, index) => {
            const fish = document.createElement('div');
            fish.className = 'fish-loading';
            fish.style.animationDelay = (index * 0.2) + 's';
            
            const emojiSpan = document.createElement('span');
            emojiSpan.className = 'fish-emoji-loading';
            emojiSpan.textContent = emoji;
            
            fish.appendChild(emojiSpan);
            centerContainer.appendChild(fish);
        });

        // Agregar texto
        const textElement = document.createElement('div');
        textElement.className = 'fish-text';
        textElement.innerHTML = 'Nadando...';

        centerContainer.appendChild(textElement);
        wrapper.appendChild(centerContainer);
        container.appendChild(wrapper);
        document.body.appendChild(container);

        // Cerrar la animación después del tiempo especificado
        setTimeout(() => {
            this.closeFishAnimation();
        }, duration);
    }

    // Crear un pez que nada horizontalmente
    createSwimmingFish() {
        const fish = document.createElement('div');
        const fishEmoji = this.fishEmojis[Math.floor(Math.random() * this.fishEmojis.length)];
        
        fish.className = `fish fish-swimming-horizontal`;
        
        // Posición inicial aleatoria en altura
        const randomTop = Math.random() * 60 + 20;
        fish.style.top = randomTop + '%';
        
        // Duración aleatoria para variación
        const randomDuration = (Math.random() * 3 + 4);
        fish.style.animationDuration = randomDuration + 's';
        
        // Delay aleatorio para que entren en diferentes momentos
        const randomDelay = Math.random() * 2;
        fish.style.animationDelay = randomDelay + 's';
        
        // Crear el emoji del pez
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'fish-emoji';
        emojiSpan.textContent = fishEmoji;
        
        fish.appendChild(emojiSpan);
        
        return fish;
    }

    // Cerrar la animación
    closeFishAnimation() {
        const container = document.getElementById('fishAnimation');
        
        if (container) {
            container.classList.add('closing');
            
            setTimeout(() => {
                container.remove();
                this.isPlaying = false;
            }, 600);
        }
    }
}

// Inicializar la animación de peces
const fishAnimation = new FishAnimation();

// Ejecutar animación cuando se carga la página (opcional)
document.addEventListener('DOMContentLoaded', () => {
    // Agregar event listener al logo
    setTimeout(() => {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                fishAnimation.createFishAnimation(3000); // 3 segundos de animación
                
                // Redirigir al inicio después de la animación
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            });
            logo.style.cursor = 'pointer';
        }
    }, 500);
});
