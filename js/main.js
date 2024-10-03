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
