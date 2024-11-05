const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const li = document.querySelector(".lista-de-productos");
const $i = document.querySelector('.input');

// Función para mostrar productos en la lista
const mostrarProductos = (productos) => {
  li.innerHTML = ""; // Limpiar la lista actual
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  });
};

// Mostrar todos los productos al inicio
mostrarProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = $i.value.toLowerCase(); // Convertir el texto a minúsculas para una búsqueda no sensible a mayúsculas
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados); // Mostrar solo los productos filtrados
};

// Función para filtrar productos
const filtrado = (productos = [], texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto) ||
    item.nombre.toLowerCase().includes(texto)
  );
};
