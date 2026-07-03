const colores = ["green", "blue", "red"];

function cambiarColor(elemento) {
    const numeroAleatorio = Math.floor(Math.random() * colores.length);
    elemento.style.color = colores[numeroAleatorio];
}

// Hola