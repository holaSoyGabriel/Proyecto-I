/** @format */

let indice = 0;
let frases = document.querySelectorAll(".frase-container p");
let indiceFrase = 0;
const imagenes = document.querySelectorAll(".custom-img");

function cambiarImagen(direccion) {
	imagenes[indice].style.display = "none";
	indice += direccion;

	if (indice < 0) indice = imagenes.length - 1;
	if (indice >= imagenes.length) indice = 0;

	imagenes[indice].style.display = "block";
}

// Ocultar todas menos la primera al cargar
window.onload = function () {
	imagenes.forEach((img, i) => {
		img.style.display = i === 0 ? "block" : "none";
	});
};

function abrirModal(imagen) {
	let modal = document.getElementById("modal");
	let imagenModal = document.getElementById("imagenModal");

	modal.style.display = "flex";
	imagenModal.src = imagen.src;
}

function cerrarModal() {
	document.getElementById("modal").style.display = "none";
}

function toggleCollapse(id) {
    let content = document.getElementById(id);
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let frases = document.querySelectorAll(".frase-container p");
    let indiceFrase = 0;

    function cambiarFrase() {
        // Ocultar todas las frases
        frases.forEach((frase) => {
            frase.style.visibility = "hidden";
            frase.style.opacity = "0";
        });

        // Mostrar la frase actual
        frases[indiceFrase].style.visibility = "visible";
        frases[indiceFrase].style.opacity = "1";

        // Pasar a la siguiente frase
        indiceFrase = (indiceFrase + 1) % frases.length;
    }

    // Asegurar que la primera frase sea visible al cargar
    frases[0].style.visibility = "visible";
    frases[0].style.opacity = "1";

    // Cambiar la frase cada 4 segundos
    setInterval(cambiarFrase, 4000);
});
/**
 * function animarTitulo() {
 *     let colores = ["#ff7300", "yellow", "#ff0000", "#ff7300"];
 *     let titulo = document.querySelector("h1");
 *     let i = 0;
 *
 *     setInterval(() => {
 *         titulo.style.color = colores[i];
 *         i = (i + 1) % colores.length;
 *     }, 500);
 * }
 *
 * window.onload = animarTitulo;
 *
 *
 */
