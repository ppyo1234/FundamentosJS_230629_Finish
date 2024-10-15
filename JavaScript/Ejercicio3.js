// Objetos

// Definición de un fondo con un degradado lineal para estilos de consola
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

// Definición de estilos personalizados para los mensajes de consola utilizando el fondo definido anteriormente
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

// Muestra una advertencia en la consola indicando el inicio de la práctica sobre objetos
console.warn("Practica 05: Repaso de Objetos en Java Script");

// VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

// Declaración de variables independientes relacionadas a un PRODUCTO
let Producto_Nombre = "Computadora Gammer Laptop 17\""; // Nombre del producto
let Producto_Marca = "ASUS";                            // Marca del producto
let Producto_Modelo = "TUF 17";                         // Modelo del producto
let Producto_Precio = 15749.50;                         // Precio del producto
let Producto_Disponibilidad = true;                      // Disponibilidad del producto (booleano)
let Producto_SKU = Symbol("TUF707VV-HX221W");            // SKU del producto como un símbolo único
let Producto_Stock = 15;                                 // Cantidad en stock
let Producto_Imagen = null;                              // Ruta de la imagen del producto, inicialmente nula
let Producto_Barcode;                                    // Código de barras del producto, no asignado inicialmente
let Producto_Categorias = ["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"]; // Categorías del producto

// Acceso e impresión de los valores de las características del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);
    
// Explicación sobre el uso de Symbol para SKU
console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);           // Imprime el Symbol del SKU
console.log(typeof(Producto_SKU));  // Verifica el tipo de dato, que será 'symbol'

// Ahora declaramos el producto como un OBJETO para agrupar sus propiedades
console.log("%c2.- Objeto", style_console);

// Definición del objeto 'Producto' con sus propiedades
let Producto = {
    ID: 100,                                        // Identificador único del producto
    Nombre: "Tenis Deportivos",                     // Nombre del producto
    Marca: "Nike",                                  // Marca del producto
    Modelo: "Jordan '24",                           // Modelo del producto
    Precio: 3361.25,                                // Precio del producto
    Disponibilidad: false,                          // Disponibilidad del producto (booleano)
    Stock: 0,                                       // Cantidad en stock
    SKU: "DZ5485-612",                              // SKU del producto como cadena de texto
    Imagen: "../assets/products/sneakers/JORDAN.png", // Ruta de la imagen del producto
    Barcode: null,                                  // Código de barras del producto, inicialmente nulo
    Categorias: ["Deportes", "Juvenil"]             // Categorías del producto
}

// Imprime el objeto completo en formato de tabla para una mejor visualización
console.table(Producto);

// Acceso a propiedades específicas del objeto 'Producto'
console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`) // Concatenación de nombre, marca y modelo
console.log(`Precio: ${Producto.Precio}`) // Imprime el precio del producto

// Condicional para verificar la disponibilidad del producto
if (Producto.Disponibilidad == 0)
    console.log(`Estatus: Agotado`) // Si disponibilidad es 0, el producto está agotado
else 
    console.log(`Estatus: ${Producto_Stock} unidades disponibles.`); // De lo contrario, muestra las unidades disponibles

// DESSTRUCTURACIÓN DE OBJETOS
console.log("%c3.- Destructuración de Objetos", style_console);

// Definición de otro objeto 'Producto2' con propiedades similares
let Producto2 = {   
    Clave: 316,                                     // Clave única del producto
    Nombre: "Lentes para Sol",                      // Nombre del producto
    Marca: "Oakley",                                // Marca del producto
    Modelo: "QNTM Kato",                            // Modelo del producto
    Precio: 6829.00,                                // Precio del producto
    Disponibilidad: true,                           // Disponibilidad del producto (booleano)
    Stock: 5,                                       // Cantidad en stock
    SKU: "OO9481D-0356",                            // SKU del producto
    Imagen: "../assets/products/sunglasses/KatoRed.png", // Ruta de la imagen del producto
    Barcode: 888392491626,                          // Código de barras del producto
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"] // Categorías del producto
}

// Definición del objeto 'Comprador' con sus propiedades
let Comprador = {
    ID: 3216,                                       // Identificador único del comprador
    Nombre: "Marco",                                // Nombre del comprador
    Apellidos: "Ramírez Hernández",                 // Apellidos del comprador
    Tipo: "Frecuente",                              // Tipo de comprador
    Correo: "mar.ram@gmail.com",                    // Correo electrónico del comprador
    PaisOrigen: "México",                           // País de origen del comprador
    SaldoActual: 14000.00                           // Saldo actual del comprador
}

// Definición del objeto 'Pedido' con sus propiedades
let Pedido = {
    ID: 5816,                                       // Identificador único del pedido
    Producto_ID: 316,                               // ID del producto pedido
    Comprador_ID: 3216,                             // ID del comprador
    Cantidad: 2,                                    // Cantidad de productos pedidos
    Estatus: "Carrito de Compra",                   // Estatus del pedido
    TipoPago: "Tarjeta de Crédito"                  // Tipo de pago utilizado
}

// Comentario sobre la necesidad de calcular el costo y verificar el saldo
// En base a los 3 objetos necesitamos calcular el producto el costo y si le alcanza con su saldo a favor

// Destructuración de objetos para extraer valores específicos
let { Precio: Producto_Precio2 } = Producto2;      // Extrae el precio del producto y lo asigna a 'Producto_Precio2'
let { Cantidad: Pedido_Cantidad } = Pedido;        // Extrae la cantidad del pedido y lo asigna a 'Pedido_Cantidad'
let { SaldoActual: Cliente_SaldoActual } = Comprador; // Extrae el saldo actual del comprador y lo asigna a 'Cliente_SaldoActual'

// Cálculo del costo total de la compra
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

// Imprime el costo total de la compra
console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: $${Costo_Compra}`)

// Condicional para verificar si el cliente tiene saldo suficiente
if (Costo_Compra < Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")
else
    console.log("El cliente no tiene saldo suficiente")

// ACTUALIZACIÓN DE LOS VALORES DE LAS PROPIEDADES DE UN OBJETO
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

// Imprime los valores actuales del objeto 'Producto2' en formato JSON para una mejor visualización
console.log(`El objeto tiene los siguientes valores:`)
console.log(JSON.stringify(Producto2, null, 2)); // Convierte el objeto a una cadena JSON con formato

// Indica que el precio del producto ha cambiado debido a la inflación y necesita ser actualizado
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

// Actualización del precio del producto en el objeto 'Producto2'
Producto2.Precio = 6915.50;

// Imprime los nuevos valores del objeto 'Producto2' después de la actualización
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2);

// Pregunta sobre la posibilidad de cambiar el tipo de dato de una propiedad en un objeto de JavaScript
// Sí, en JavaScript puedes cambiar el tipo de dato de una propiedad de un objeto asignándole un nuevo valor de un tipo diferente

// Separador visual en la consola
console.log(`-----------------------------------------------------------------------------------`)

// Imprime los valores actuales del objeto 'Producto2'
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad = typeof(Producto2.Disponibilidad) // Obtiene el tipo de dato de la propiedad 'Disponibilidad'
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2)); // Imprime el objeto en formato JSON

// Cambia el valor de la propiedad 'Disponibilidad' de booleano a cadena de texto
Producto2.Disponibilidad = "Sí";
let nuevoTipoDisponible = typeof(Producto2.Disponibilidad) // Obtiene el nuevo tipo de dato de 'Disponibilidad'
console.log(Producto2); // Imprime el objeto actualizado

console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponible}`) // Muestra el nuevo tipo de dato

// AGREGAR NUEVAS PROPIEDADES AL OBJETO
console.log("%c5.- Agregación de propiedades al Objeto", style_console);

// Imprime la estructura y valores actuales del objeto 'Comprador'
console.log("Objeto antes de ser modificado");
console.log(JSON.stringify(Comprador, null, 2));

// Agrega nuevas propiedades al objeto 'Comprador' utilizando notación de corchetes
Comprador[`Direccion`] = "Av. 05 de Mayo #25, Interior 4A, Xicotepec de Juarez, Puebla, México";
Comprador[`Tipo`] = "Premium";                       // Actualiza la propiedad 'Tipo' a 'Premium'
Comprador[`Estatus`] = "Inactivo";                  // Agrega la propiedad 'Estatus'
Comprador[`TotalCompra`] = 2525.50;                 // Agrega la propiedad 'TotalCompra'

// Imprime el objeto 'Comprador' después de agregar las nuevas propiedades en formato de tabla
console.log("Objeto despues de ser modificado")
console.table(Comprador)

// ELIMINAR PROPIEDADES DE UN OBJETO EXISTENTE
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);

// Imprime la estructura y valores actuales del objeto 'Pedido' antes de la eliminación de propiedades
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)

// Elimina la propiedad 'TipoPago' del objeto 'Pedido' usando el operador 'delete'
delete Pedido.TipoPago // Elimina la propiedad 'TipoPago'

// Imprime el objeto 'Pedido' después de la eliminación de la propiedad en formato de tabla
console.log("Despues de la modificación...")
console.table(Pedido)

// MÉTODOS PARA CONTROLAR LA MUTABILIDAD DE LOS OBJETOS: CONGELACIÓN (FREEZE)
console.log("%c7.- métodos para controlar la mutabilidad de los objetos: Congelación (FREEZE)", style_console);

// Imprime la estructura y valores actuales del objeto 'Comprador'
console.log("La estructura actual del objeto comprador es:")
console.table(Comprador)

// Congela el objeto 'Comprador' impidiendo cualquier modificación futura
Object.freeze(Comprador)

// Intentos de modificar el objeto 'Comprador' después de congelarlo
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25" // Intento de agregar una nueva propiedad
delete Comprador.Tipo                                // Intento de eliminar una propiedad existente
Comprador.Direccion = "Calle 16 de Septiembre #102m Col. Manantiales, Huachinango, Puebla, México" // Intento de modificar una propiedad existente

// Verifica si se realizaron cambios en el objeto 'Comprador' después de congelarlo
console.log(`Verificamos si se realizaron los cambios en el objeto comprador`)
console.table(Comprador);

// MÉTODOS PARA CONTROLAR LA MUTABILIDAD DE LOS OBJETOS: SELLADO (SEAL)
console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos: Sellado (SEAL)", style_console);

// Imprime la estructura y valores actuales del objeto 'Pedido' antes de sellarlo
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)

// Sella el objeto 'Pedido' impidiendo la adición o eliminación de propiedades, pero permitiendo la modificación de las existentes
Object.seal(Pedido)

// Intentos de modificar la estructura del objeto 'Pedido' después de sellarlo
Pedido[`FechaPedido`] = "25/09/24 15:00:52" // Intento de agregar una nueva propiedad
delete Pedido[`Cantidad`]                   // Intento de eliminar una propiedad existente

// Imprime el objeto 'Pedido' después de los intentos de modificación en formato de tabla
console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO")
console.table(Pedido) 

// Intento de modificar el valor de una propiedad existente en el objeto 'Pedido' después de sellarlo
Pedido.Cantidad = 5; // Modifica la cantidad del pedido
console.log("Verificamos si se realizaron los cambios en el objeto PEDIDO")
console.table(Pedido) 

// DESTRUCTURACIÓN DE 2 O MÁS OBJETOS
console.log("%c9.- Destructuración de 2 o más objetos", style_console);

// Destructuración del objeto 'Producto' para extraer 'Precio', 'SKU' y 'Marca' con nuevos nombres
let { Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca } = Producto

// Destructuración del objeto 'Comprador' para extraer 'Correo', 'PaisOrigen', 'SaldoActual' y 'Tipo' con nuevos nombres
let { Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo } = Comprador

// Nota: La línea 'Comprador' aislada parece innecesaria y puede eliminarse o comentarse si no es requerida

// Transformación de valores cuantitativos en cualitativos
if (productoPrecio > 2000) {
    productoPrecio = "caro" // Si el precio es mayor a 2000, se clasifica como 'caro'
} else {
    productoPrecio = "Barato" // De lo contrario, se clasifica como 'barato'
}
