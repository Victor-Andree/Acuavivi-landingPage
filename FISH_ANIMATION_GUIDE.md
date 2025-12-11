# 🐠 Animación de Peces - Acuavivi Landing Page

## ¿Qué se ha agregado?

Se han implementado animaciones de peces nadando que se muestran en dos momentos:

### 1. **Al presionar el logo de Acuavivi** 🐠
- Cuando hagas clic en el logo en la esquina superior izquierda, aparecerá una pantalla completa con peces nadando en diferentes direcciones
- La animación dura 3 segundos
- Después de la animación, te redireccionará a la página de inicio

### 2. **Al cambiar de página** 🐟
- Cuando navegues entre las diferentes secciones (Inicio, Quiénes Somos, Catálogo, Contacto), aparecerá una animación de transición
- Diferentes especies de peces (🐠 🐟 🐡 🦈 🦑 🐙) nadan en diferentes direcciones
- La animación dura 2.5 segundos
- Los peces desaparecen con un efecto fade-out suave

## 📁 Archivos Agregados

1. **`assets/css/fish-animation.css`** - Estilos y animaciones CSS para los peces
2. **`assets/js/fishAnimation.js`** - Lógica principal de la animación de peces

## 📝 Archivos Modificados

Se han actualizado los siguientes archivos para incluir las referencias a los nuevos estilos y scripts:
- `index.html`
- `quienes-somos.html`
- `catalogo.html`
- `contacto.html`
- `assets/js/main.js`

## 🎨 Características de la Animación

- **Múltiples direcciones de nado**: Los peces nadan de izquierda a derecha, derecha a izquierda y en diagonal
- **Emojis de peces variados**: Se usan diferentes emojis para más variedad visual
- **Posiciones aleatorias**: Cada pez aparece en una altura diferente
- **Duración variable**: Los peces tienen diferentes velocidades para un efecto más natural
- **Efecto fade**: Los peces aparecen y desaparecen suavemente
- **Fondo temático**: Un gradiente azul-turquesa que simula el agua

## 🔧 Personalización

Si quieres modificar la animación, puedes ajustar:

### En `fishAnimation.js`:
- `duration` en `createFishAnimation()`: cambiar la duración de la animación
- `fishEmojis`: agregar más emojis de peces o cambiar los existentes
- `fishCount`: aumentar o disminuir la cantidad de peces

### En `fish-animation.css`:
- Colores del gradiente de fondo
- Duración de las animaciones (`animationDuration`)
- Velocidades de nado en los keyframes

## 💡 Ejemplo de uso en código

```javascript
// Mostrar animación manualmente
fishAnimation.createFishAnimation(3000); // 3000ms = 3 segundos

// Cerrar animación manualmente
fishAnimation.closeFishAnimation();
```

¡Disfruta de los peces nadando en tu landing page! 🐠🐟🐡
