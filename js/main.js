class Changito  {
  constructor() {
    this.productos = [];
  }

  agregarProducto(nombreProducto, precioProducto) {
    this.productos.push({
      id: this.generarId(),
      nombre: nombreProducto.toLocaleUpperCase(),
      precio: precioProducto,
    });
    console.log("Agregaste un Producto!");
  }

  eliminarProducto(id) {
    this.productos = this.productos.filter((item) => item.id != id);
    console.log("Eliminaste un Producto!");
  }

  totalProductos() {
    return this.productos.length;
  }

  sumaTotal() {
    let total = 0;

    this.productos.forEach((item) => {
      total += item.precio;
    });

    return total;
  }

  generarId() {
    let max = 0;

    this.productos.forEach((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });

    return max + 1;
  }

  listarProductos() {
    let contenido = "Productos agregados:\n\n";
    this.productos.forEach(item => {
      contenido += (item.id + ' ' + item.nombre + ' ' + '$' + item.precio + ' ' + "\n");
    });

    return contenido;
  }
}

let nombre = "";
let precio = "$";
const carrito = new Changito();

// ----- AGREGAR PRODUCTO ----- // 

while (nombre.toLocaleUpperCase() != "ESC") {
  nombre = prompt("Ingrese el Nombre del Producto:\n(ESCRIBA ESC PARA SALIR)");

  if (nombre.toLocaleUpperCase() == "ESC") {
    break;
  }

  precio = parseFloat(prompt("Ingrese el Precio del Producto:"));
  carrito.agregarProducto(nombre, precio);
}

// ----- VALIDACION ----- //

if (carrito.totalProductos() > 0) {
  alert(`${carrito.listarProductos()}\nTotal a Pagar: $${carrito.sumaTotal()}`);
} else {
  alert("No se encontraron Productos agregados en el Carrito!");
}
