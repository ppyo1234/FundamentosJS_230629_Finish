// Tipos de Datos en JS

// 1. Undefined
// Declaración de la variable 'cliente' sin asignarle un valor inicial, por lo que su valor es 'undefined'
let cliente;

// Imprime en la consola el valor actual de 'cliente', que es 'undefined'
console.log(`El cliente es: ${cliente}`);

// Imprime en la consola el tipo de dato de 'cliente' utilizando 'typeof', que será 'undefined'
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Asigna el valor "Juan Romero" a la variable 'cliente'
cliente = "Juan Romero";

// Imprime el nuevo valor de 'cliente'
console.log(`El cliente es: ${cliente}`);

// Imprime el tipo de dato actualizado de 'cliente', que ahora es 'string'
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Asigna el valor numérico 19227 a la variable 'cliente'
cliente = 19227;

// Imprime el valor actualizado de 'cliente'
console.log(`El cliente es: ${cliente}`);

// Imprime el tipo de dato actualizado de 'cliente', que ahora es 'number'
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. Boolean
// Muestra una advertencia en la consola indicando que se tratará el tipo de dato BOOLEAN
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False)");

// Declara la variable 'esPremium' y le asigna inicialmente el valor de cadena "No lo sé"
let esPremium = "No lo sé";

// Imprime si el cliente es premium, actualmente mostrando el valor "No lo sé"
console.log(`¿Es el cliente premium? : ${esPremium} `);

// Imprime el tipo de dato de 'esPremium', que es 'string'
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// Indica que se asignará el valor "true" a la variable 'esPremium'
console.log(`Asignando el valor "true" a la variable`);

// Asigna la cadena "true" a la variable 'esPremium'
esPremium = "true";

// Imprime el nuevo valor de 'esPremium'
console.log(`¿Es el cliente premium? : ${esPremium} `);

// Imprime el tipo de dato actualizado de 'esPremium', que sigue siendo 'string'
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// Indica que se asignará el valor booleano 'true' a la variable 'esPremium'
console.log("Asignando el valor true a la variable");

// Asigna el valor booleano 'true' a la variable 'esPremium'
esPremium = true;

// Imprime el valor actualizado de 'esPremium', que ahora es 'true'
console.log(`¿Es el cliente premium? : ${esPremium} `);

// Imprime el tipo de dato actualizado de 'esPremium', que ahora es 'boolean'
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// Indica que se asignará el valor booleano 'false' a la variable 'esPremium'
console.log("Asignando el valor false a la variable");

// Asigna el valor booleano 'false' a la variable 'esPremium'
esPremium = false;

// Imprime el valor actualizado de 'esPremium', que ahora es 'false'
console.log(`¿Es el cliente premium? : ${esPremium} `);

// Imprime el tipo de dato actualizado de 'esPremium', que sigue siendo 'boolean'
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

// Condicional que verifica si 'esPremium' es verdadero o falso
if (esPremium) {
    // Si 'esPremium' es true, imprime que el cliente pagó por el servicio
    console.log("El cliente pago por usar el servicio");
} else {
    // Si 'esPremium' es false, imprime que el cliente recibe servicios gratuitos
    console.log("El cliente recibe los servicios gratuitos")
}

// 3. Number

// Declara la variable 'cantidad' sin asignarle un valor inicial
var cantidad;

// Declara la constante 'costo_producto' y le asigna el valor 10.50
const costo_producto = 10.50;

// Declara la variable 'saldo_cuenta' y le asigna el valor -2500.40
let saldo_cuenta = -2500.40;

// Declara la variable 'monto_transaccion' sin asignarle un valor inicial
let monto_transaccion;

// Muestra una advertencia en la consola indicando que se tratará el tipo de dato NUMBER
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");

// Imprime el saldo actual de la cuenta y su tipo de dato
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);

// Imprime el costo del producto seleccionado y su tipo de dato
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, (Tipo de Dato = ${typeof(costo_producto)})`);

// Asigna el valor 8 a la variable 'cantidad'
cantidad = 8;

// Imprime la cantidad de productos que se han elegido comprar
console.log(`Has elegido comprar: ${cantidad} de productos`);

// Calcula e imprime el importe total de la compra
console.log(`El importe total de la compra es: ${cantidad * costo_producto}`);

// Actualiza el saldo de la cuenta restando el importe total de la compra
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);

// Imprime el nuevo saldo de la cuenta
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

// El cliente realiza un abono de 1500 
monto_transaccion = 1500;

// Imprime el abono recibido y el nuevo saldo después del abono
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta + monto_transaccion}`);

// 4. Strings o Cadenas de Texto

// Declara la constante 'alumno' y le asigna el nombre completo de un alumno
const alumno = "Jesús Domínguez Ramírez";

// Declara la variable 'producto' sin asignarle un valor inicial
let producto;

// Muestra una advertencia en la consola indicando que se tratará el tipo de dato STRING
console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");

// Imprime el nombre del alumno y su tipo de dato
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

// Asigna el valor 'MONITOR 20"' a la variable 'producto'
producto = "MONITOR 20\"";

// Imprime el nombre del producto y su tipo de dato
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRINGS
// Convierte el nombre del alumno a mayúsculas y lo imprime
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);

// Convierte el nombre del producto a minúsculas y lo imprime
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

// Declara la variable 'numero' como una cadena de texto
let numero = "30";

// Declara la variable 'numero2' como un número
let numero2 = 30;

// Imprime el tipo de dato de 'numero', que es 'string'
console.log(typeof numero);

// Imprime el tipo de dato de 'numero2', que es 'number'
console.log(typeof numero2);

// 5. BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
// Muestra una advertencia en la consola indicando que se tratará el tipo de dato BIGINT
console.warn("--- Tipo de Dato - BIGINT (Número Amplio)");

// Declara la constante 'numeroGrande' y le asigna un número grande que aún es soportado por el tipo 'number'
const numeroGrande = 1234567890;

// Declara la constante 'numeroGrande2' con un número aún más grande soportado por 'number'
const numeroGrande2 = 12345678901234567890;

// Declara la variable 'numeroGrande3' con un número muy grande, excediendo la precisión de 'number'
let numeroGrande3 = 12345678901234567890123456789;

// Declara la variable 'numeroGrande4' con un número extremadamente grande, perdiendo precisión en 'number'
let numeroGrande4 = 1234567890123456789012345678901234567890;

// Imprime los experimentos con números grandes y sus tipos de datos
console.log(`El primero experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande4}, que ya no es soportado por NUMBER perdiendo precisión, y su tipo de dato es: ${typeof(numeroGrande4)}`);

// Para definir el tipo de dato BigInt debemos invocar la función BigInt o usar la letra "n" al final del número en la asignación de valor
console.log("Declaramos los valores númericos gran tamaño...");

// Convierte 'numeroGrande3' a BigInt utilizando la función BigInt
numeroGrande3 = BigInt(12345678901234567890123456789);

// Asigna un valor BigInt a 'numeroGrande4' usando la notación 'n' al final del número
numeroGrande4 = 123456789012345678901234567891234567890n;

// Imprime los nuevos valores de 'numeroGrande3' y 'numeroGrande4' y sus tipos de datos
console.log(`El segundo experimento de un numero grande es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`);  
console.log(`El segundo experimento de un numero grande es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`);

// Nota: Los tipos de datos declarados como BigInt no son operables con los de tipo number

// Declara la variable 'numero1' y le asigna el valor 238
let numero1 = 238;

// Imprime el tipo de dato de 'numeroGrande', que es 'number'
console.log(typeof numeroGrande);

// Si intentamos realizar una operación matemática entre BigInt y Number, debemos convertir uno de ellos para evitar errores
console.log(`El resultado de la operación de: numeroGrande4/numero1 es = a: ${numeroGrande4 / BigInt(numero1)}`);

// Las siguientes líneas de código están comentadas y no se ejecutarán
// const numero3 = 10;
// const numero4 = 20;

// console.log(numero3 + Number(numeroGrande));

// const numero5 = "30";
// const numero6 = 30;
// console.log(typeof String(numero2));
// console.log(typeof Number(numero)); // Error: 'Numbernumero' no está definido

// 6. Symbol
// Muestra una advertencia en la consola indicando que se tratará el tipo de dato SYMBOL
console.warn("--- Tipo de Dato - SYMBOL (Simbolo o Forzar la Unicidad)");

// VID APUNTES
// Las siguientes líneas están comentadas y no se ejecutarán
// const primerSymbol = Symbol(30);
// const segundoSymbol = Symbol(30);

// console.log(primerSymbol === segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());

// Marco APUNTES

// Declaramos diferentes variables con valores similares o iguales
const numero3 = 2;                     // Número entero
const numero4 = 2.0;                   // Número flotante
const numero5 = "2";                   // Cadena de texto
const numero6 = "2.0";                 // Cadena de texto con decimal
const numero7 = Symbol(2);             // Símbolo
const numero8 = Symbol(2.0);           // Símbolo
const numero9 = Symbol("2");           // Símbolo con descripción
const numero10 = Symbol(2);            // Otro símbolo
