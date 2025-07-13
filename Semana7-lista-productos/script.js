// Lista inicial de productos
let productos = [
  { nombre: "Camiseta ecológica", precio: 19.99, descripcion: "Hecha con algodón orgánico." },
  { nombre: "Jeans reciclados", precio: 34.50, descripcion: "Materiales reutilizados para un estilo sostenible." },
  { nombre: "Chaqueta vegana", precio: 49.90, descripcion: "Sin cuero, amigable con los animales." }
];

// Referencia al <ul> donde se mostrarán los productos
const lista = document.getElementById("lista-productos");

// Función para renderizar la lista completa
function renderizarProductos() {
  lista.innerHTML = ""; // Limpia la lista
  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio} | ${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto (de ejemplo)
document.getElementById("btn-agregar").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: 29.99,
    descripcion: "Descripción del nuevo producto."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderiza al cargar la página
renderizarProductos();
