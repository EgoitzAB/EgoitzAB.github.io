document.addEventListener('DOMContentLoaded', function () {
    const imagen = document.querySelector('.imagen-portada');
    const texto = document.querySelector('.texto');

    // Agregar clase 'visible' si los elementos existen
    if (imagen) {
        imagen.classList.add('visible');
    }

    if (texto) {
        texto.classList.add('visible');
    }
});

const track = document.querySelector('.carousel-track');

track.addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running';
});
