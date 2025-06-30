// Obtener los elementos del DOM por su ID
const urlInput = document.getElementById("urlInput");         // Campo de texto para ingresar la URL
const agregarBtn = document.getElementById("agregarBtn");     // Botón para agregar imagen
const eliminarBtn = document.getElementById("eliminarBtn");   // Botón para eliminar imagen
const galeria = document.getElementById("galeria");           // Contenedor de imágenes

// Variable para guardar la imagen actualmente seleccionada
let imagenSeleccionada = null;

// Evento para agregar una imagen cuando se hace clic en el botón
agregarBtn.addEventListener("click", () => {
  const url = urlInput.value.trim(); // Obtener y limpiar el valor ingresado
  if (url) { // Si no está vacío
    const img = document.createElement("img"); // Crear un nuevo elemento <img>
    img.src = url; // Asignar la URL como fuente de la imagen
    img.alt = "Imagen de usuario"; // Texto alternativo
    img.addEventListener("click", () => seleccionarImagen(img)); // Asignar evento de selección al hacer clic
    galeria.appendChild(img); // Agregar la imagen al contenedor de la galería
    urlInput.value = ""; // Limpiar el campo de texto
  }
});

// Función para seleccionar una imagen
function seleccionarImagen(img) {
  if (imagenSeleccionada) {
    imagenSeleccionada.classList.remove("seleccionada"); // Quitar selección previa
  }
  imagenSeleccionada = img; // Asignar la nueva imagen seleccionada
  imagenSeleccionada.classList.add("seleccionada"); // Resaltar con clase CSS
}

// Evento para eliminar la imagen actualmente seleccionada
eliminarBtn.addEventListener("click", () => {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada); // Eliminar del DOM
    imagenSeleccionada = null; // Limpiar la variable
  }
});

// Permitir agregar imagen presionando Enter desde el input
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarBtn.click(); // Simula clic en el botón "Agregar Imagen"
  }
});
