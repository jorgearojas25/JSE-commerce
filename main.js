const Usuarios = [];
const Productos = [];
const Pedidos = [];

const Ejecutar = () => {
  switch (Menu()) {
    case 1:
      MenuPersona();
      break;
    case 2:
        MenuProductos();
      break;
    case 3:
      break;
    case 4:
      alert("Gracias por tu visita");
      break;
    default:
      alert("Esta opcion no esta disponible");
      Ejecutar();
      break;
  }
};

const Menu = () => {
  return Number(
    prompt(
      `Bienvenido seleccion la opcion a la que deseas acceder \n 
    1. Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir`
    )
  );
};

const SeleccionMenuPersona = () => {
  return prompt(
    `Personas: \n a. Alta \n b. Listado \n Oprime 0 para volver al inicio`
  );
};

const SeleccionMenuProductos = () => {
    return prompt(
      `Productos: \n a. Alta \n b. Listado \n Oprime 0 para volver al inicio`
    );
  };

const MenuPersona = () => {
  switch (SeleccionMenuPersona()) {
    case "a":
        IngresarUsuario();
        MenuPersona();
      break;
    case "b":
      ListadoUsuarios();
      MenuPersona();
      break;
    case "0":
      Ejecutar();
      break;
    default:
      alert("Esta opcion no esta disponible");
      MenuPersona();
      break;
  }
};

const MenuProductos = () => {
    switch (SeleccionMenuProductos()) {
      case "a":
          IngresarProductos();
          MenuProductos();
        break;
      case "b":
        break;
      case "0":
        Ejecutar();
        break;
      default:
        alert("Esta opcion no esta disponible");
        MenuProductos();
        break;
    }
  };

const ListadoUsuarios = () => {
  let listado = "";
  if (user.length) {
    for (const user in usuario) {
        listado += `${user.idUsuario} ${user.nombre} ${user.apellido} \n`;
    }
  }
  return alert(listado);
};

const IngresarUsuario = () => {
  Usuarios.push(new Usuario(prompt("Ingrese su nombre"),
                prompt("Ingresa su apellido"),
                prompt("Ingresa su telefono"),
                Usuarios.length )
                );
  return Usuarios.length ? alert("Usuario registrado correctamente") : alert("No se pudo registrar usuario"); 
}

const IngresarProductos = () => {
    Productos.push(new Producto(prompt("Ingrese nombre de producto"),
                  prompt("Ingresa descripcion de producto"),
                  Productos.length )
                  );
    return Productos.length ? alert("Producto registrado correctamente") : alert("No se pudo registrar el producto"); 
  }///Clases

class Usuario {
  constructor(nombre, apellido, telefono, idUsuario) {
    this.idUsuario = idUsuario > 1 ? idUsuario : 1;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

class Producto {
  constructor(nombreProducto, descripcionProducto, idProducto) {
    this.idProducto = idProducto > 1 ? idProducto : 1;
    this.nombreProducto = nombreProducto;
    this.descripcionProducto = descripcionProducto;
  }
}

class Pedido {
  constructor(usuarioPedido, productoPedido, idPedido) {
    this.usuarioPedido = usuarioPedido;
    this.productoPedido = productoPedido;
    this.idPedido = idPedido ? idPedido++ : 1;
  }
}
/*
Menu 
Registro de users
Lista con usuarios
Registrar Productos
ListarProductos



*/
