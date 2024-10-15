// Repaso de Arreglos

// Estilización de las salidas a consola
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,121,1) 30%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

// Muestra una advertencia en la consola indicando el inicio de la práctica sobre arreglos
console.warn("Practica 06: Arreglos en Java Script");

// Declaración de un arreglo (Array)
console.log("%c1.- Declaración de un arreglo (Array)", style_console);

// Declaración de un arreglo que contiene los meses del año
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Imprime el arreglo completo en la consola
console.log(mesesAnio);

// Imprime el arreglo en formato de tabla para una mejor visualización
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos
console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);

// Imprime el primer mes del año utilizando el índice 0
console.log(`El primer mes del año es: ${mesesAnio[0]} `);

// Intenta imprimir el último mes del año utilizando una sintaxis incorrecta (mesesAnio,length-1)
console.log(`El ultimo mes del año es: ${mesesAnio[mesesAnio,length-1]}`);

// Comentario sobre accesos inválidos en arreglos
// No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido.

// Intenta acceder a una posición negativa del arreglo, lo cual retornará 'undefined'
console.log(`El mes del año en la posición -1 es: ${mesesAnio[-1]}`);

// Intenta acceder a una posición fuera del rango del arreglo, lo cual retornará 'undefined'
console.log(`El mes del año en la posición es: ${mesesAnio[12]}`);

// Verifica el tipo de dato del arreglo, que será 'object'
console.log(`¿Qué tipo de dato es un arreglo? ${typeof(mesesAnio)}`);

// Al ser JavaScript un lenguaje débilmente tipado, podremos crear arreglos mixtos de tipos de datos
console.log("Declarar un arreglo mixto");

// Definición de una función 'saludar' que toma un nombre y retorna un saludo personalizado
const saludar = function(nombre){return `Hola, ${nombre}!`};

// Declaración de un arreglo mixto que contiene diferentes tipos de datos
let arregloMixto = [
    "String",                                  // Cadena de texto
    9,                                         // Número entero
    45.26,                                     // Número decimal
    -200,                                      // Número negativo
    -0.16853,                                  // Número decimal negativo
    Symbol("Mich"),                            // Símbolo único
    'z',                                       // Caracter
    false,                                     // Booleano
    BigInt(1111112222222333334444444555566666777), // BigInt
    true,                                      // Booleano
    {latitud:"20°18'0\" N", longitud: "97°58'00\" W", altitud:796}, // Objeto
    saludar,                                   // Función
    null                                       // Null
];

// Imprime el arreglo mixto en la consola
console.log(arregloMixto);

// Imprime el arreglo mixto en formato de tabla para una mejor visualización
console.table(arregloMixto);

// Verifica el tipo de dato del arreglo mixto, que será 'object'
console.log(typeof(arregloMixto));

// Imprime los tipos de datos de cada elemento del arreglo mixto
console.log("Verificamos los tipos de datos de los elementos del arreglo: ");

console.log(`El dato en la posición[0]= ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posición[1]= ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posición[2]= ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posición[3]= ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posición[4]= ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posición[5]= ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`);
console.log(`El dato en la posición[6]= ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`);
console.log(`El dato en la posición[7]= ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`);
console.log(`El dato en la posición[8]= ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`);
console.log(`El dato en la posición[9]= ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`);
console.log(`El dato en la posición[10]= ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`);
console.log(`El dato en la posición[12]= ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`);

// Arreglos Multidimensionales (Matrices)
console.log("%c3.- Arreglos Multidimensionales (Matrices)", style_console);

// Declaración de una matriz regular (2 filas x 4 columnas)
console.log("Declarando una matriz regular");
let matriz = [
    [1, 2, 3, 4],                  // Primera fila
    ['a', 'b', 'c', 'd']           // Segunda fila
];

// Imprime la matriz regular en la consola
console.log(matriz);

// Imprime la matriz regular en formato de tabla para una mejor visualización
console.table(matriz);

// Declaración de una matriz irregular (diferentes números de columnas por fila)
console.log("Declaramos una matriz irregular");
const matrizIrregular = [
    ["Juan", "Pedro", "Maria", "Inés"], // Primera fila con 4 elementos
    [true, false, null],                // Segunda fila con 3 elementos
    [9.2]                                // Tercera fila con 1 elemento
];

// Imprime la matriz irregular en la consola
console.log(matrizIrregular);

// Imprime la matriz irregular en formato de tabla para una mejor visualización
console.table(matrizIrregular);

// Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular");

// Accede al elemento en la primera fila, primera columna
console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`);

// Accede al elemento en la segunda fila, tercera columna
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`);

// Accede a los valores de la matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular");

// Accede al elemento en la primera fila, primera columna
console.log(`Elementos en la posición [0][0]: ${matrizIrregular[0][0]}`);

// Accede al elemento en la segunda fila, tercera columna (null)
console.log(`Elementos en la posición [1][2] (¿Es Maria mayor?): ${matrizIrregular[1][2]}`);

// Accede al elemento en la tercera fila, primera columna
console.log(`Elementos en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`);

// Funciones y métodos de Arreglos
// Los métodos de un objeto siempre son invocados usando un punto (.), y sus parámetros se delimitan entre paréntesis ().
// En caso de que no lleven paréntesis, no son métodos, sino propiedades.

console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methods or Array functions)", style_console);

// Verificación del tamaño de los arreglos utilizando la propiedad 'length'
console.log("¿Cómo sabemos cuál es el tamaño de un arreglo?");
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`);

console.log("¿Qué pasa con los multidimensionales?");

// Obtiene el número de filas de la matriz regular
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`);

// Obtiene el número de columnas de la primera fila de la matriz regular
console.log(`matriz regular tiene un número de ${matriz[0].length} columnas`);

// Obtención de la dimensión de una matriz irregular utilizando un ciclo
console.log(`Y para la matrizIrregular?`);

// Determina el número de filas de la matriz irregular
let numeroFilas = matrizIrregular.length;

// Itera sobre cada fila de la matriz irregular para obtener su longitud (número de columnas)
for(let i = 0; i < numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`);

// Agregar un nuevo elemento a un arreglo (PUSH)
console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

// Declaración de un arreglo de estudiantes
let estudiantes = ["Michelle", "Angel", "Farias", "Ppyo", "Victoria"];

// Imprime los elementos actuales del arreglo de estudiantes
console.log("Los elementos actuales del arreglo son: ");
console.table(estudiantes);

// Agrega un nuevo estudiante al final del arreglo utilizando 'push'
console.log("Agregamos a un nuevo estudiante llamado: Obed Guzman");
estudiantes.push("Obed Guzman");

// Imprime el arreglo de estudiantes después de agregar un nuevo elemento
console.log("Después de agregar los elementos, el arreglo es: ");
console.table(estudiantes);

// Trabajando con arreglos mixtos
console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);

// Agrega la palabra "Hola" al final del arreglo mixto
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento");
arregloMixto.push("Hola");

// Agrega un número BigInt al final del arreglo mixto
console.log("Y también agregamos el número -31215282838822828288251548.2959828288284949, siendo este un BigInt");
arregloMixto.push(BigInt(-31215282838822828288251548.2959828288284949));

// Imprime el arreglo mixto después de agregar los nuevos elementos
console.log("Después de estas dos operaciones el arreglo queda con los siguientes elementos: ");
console.table(arregloMixto);

// Agregar un nuevo elemento a un arreglo en la primera posición (UNSHIFT)
console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT)", style_console);

// Imprime el arreglo de estudiantes actual
console.table(estudiantes);

// Agrega un nuevo estudiante al inicio del arreglo utilizando 'unshift'
console.log("Ahora agregamos a Derek, al comienzo del arreglo.");
estudiantes.unshift("Derek");

// Imprime el arreglo de estudiantes después de agregar un nuevo elemento al inicio
console.log("La lista actual es: ");
console.table(estudiantes);

// Eliminar elementos de un arreglo en la última posición (POP)
console.log("%c7.- Eliminar elementos de un arreglo en la última posición (POP)", style_console);

// Imprime el arreglo de estudiantes actual
console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes);

// Elimina el último elemento del arreglo utilizando 'pop'
console.log("Para este caso eliminaremos a Obed Guzman, en la posición última");
estudiantes.pop();

// Imprime el arreglo de estudiantes después de eliminar el último elemento
console.log("Después de eliminar el elemento, el arreglo queda de la siguiente manera: ");
console.table(estudiantes);

// Eliminar el elemento de un arreglo en la primera posición (SHIFT)
console.log("%c8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)", style_console);

// Imprime el arreglo de estudiantes actual
console.log("El arreglo tiene los siguientes elementos:");
console.table(estudiantes);

// Elimina el primer elemento del arreglo utilizando 'shift'
console.log("Para este caso eliminaremos a Derek, en la primera posición.");
estudiantes.shift();

// Imprime el arreglo de estudiantes después de eliminar el primer elemento
console.log("Después de eliminar el elemento del arreglo quedó de la siguiente manera: ");
console.table(estudiantes);

// Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)
console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);

// Imprime el arreglo de estudiantes actual
console.log("El arreglo original tiene los elementos: ");
console.table(estudiantes);

// Utiliza 'splice' para eliminar elementos a partir de la posición 2 hasta el final
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición ");

// Cuando la función splice recibe un solo parámetro, eliminará los elementos de esa posición en adelante
estudiantes.splice(2);

// Imprime el arreglo de estudiantes después de aplicar 'splice' con un solo parámetro
console.table(estudiantes);

// Agrega nuevamente elementos al arreglo de estudiantes para realizar más operaciones con 'splice'
estudiantes.push("Jose Arturo");
estudiantes.push("Paco Garcia");
estudiantes.push("Paco Flores");
estudiantes.push("Brisa");
estudiantes.push("Sayurid");

// Imprime el arreglo de estudiantes después de agregar nuevos elementos
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ");
console.table(estudiantes);

// Utiliza 'splice' con dos parámetros para eliminar 5 elementos a partir de la posición 3
console.log("Ahora ya tenemos los elementos suficientes para aplicar el método splice con dos parámetros que serán 3,5");
estudiantes.splice(3, 5);

// Imprime el arreglo de estudiantes después de aplicar 'splice' con dos parámetros
console.log("Resultando en: ");
console.table(estudiantes);

// Utiliza 'splice' para insertar elementos en posiciones específicas
// Inserta "Dulce" en la posición 1 sin eliminar ningún elemento
console.log("Ahora vamos a insertar a \"Dulce\" en los elementos de la posición 1 y 2");
estudiantes.splice(1, 0, "Dulce");

// Imprime el arreglo de estudiantes después de insertar un nuevo elemento
console.log("Resultando en:");
console.table(estudiantes);

// Utiliza 'splice' para reemplazar elementos en el arreglo
// Reemplaza el elemento en la posición 0 con "Al farias"
console.log("Ahora vamos a reemplazar a \"Michelle\" en los elementos de la posición 0 por \"Al farias\"");
estudiantes.splice(0, 1, "Al farias");

// Imprime el arreglo de estudiantes después de reemplazar un elemento
console.log("Resultando en:");
console.table(estudiantes);

// Métodos para la manipulación de Arreglos INMUTABLES
console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES ", style_console);

// Declaración de un arreglo de signos zodiacales
let signosZodiacales = ["Aries", "Tauro", "Geminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

// Congela el arreglo 'signosZodiacales' para hacerlo inmutable
Object.freeze(signosZodiacales);

// Comentario sobre métodos que no se ejecutarán debido a la inmutabilidad del arreglo
// Ninguna se ejecuta porque nuestro arreglo es inmutable
/*
signosZodiacales.push("Ofiuco");
signosZodiacales.unshift();
signosZodiacales.splice(6,2);
*/

// Destructuración de un arreglo utilizando la sintaxis de desestructuración
let [signo1, , signo3, , , , signo7, , , , , ] = signosZodiacales;

// Imprime el primer signo zodiacal
console.log(`El primer signo zodiacal es : ${signo1}`);

// Imprime el tercer signo zodiacal
console.log(`El tercer signo zodiacal es : ${signo3}`);

// Intenta modificar una variable extraída por desestructuración (esto no afecta al arreglo original)
signo7 = "Naranja";
console.log(`El séptimo signo zodiacal es : ${signo7}`);

// Filtrado de Elemento dentro de un arreglo utilizando el método FILTER
console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER", style_console);

// Imprime los elementos actuales del arreglo de estudiantes
console.table(estudiantes);

// Agrega más elementos al arreglo de estudiantes para tener suficientes datos para filtrar
estudiantes.push("ppyin");
estudiantes.push("tere");
estudiantes.push("mauricio");
estudiantes.push("matias");
estudiantes.push("Jonathan Emannuel");
estudiantes.push("Daniel");

// Imprime el arreglo de estudiantes después de agregar nuevos elementos
console.table(estudiantes);

// Congela el arreglo de estudiantes para hacerlo inmutable
Object.freeze(estudiantes);

// 'filter' es un método que recorre los elementos de un arreglo y devuelve un nuevo arreglo con los elementos que cumplen una condición específica
console.log("Filtrando los primeros 5 elementos");

// Filtra los primeros 5 elementos del arreglo de estudiantes
let nuevoEstudiantes = estudiantes.filter((estudiante, index) => index < 5);
console.table(nuevoEstudiantes);

// Otra forma de filtrar los primeros 5 elementos utilizando una función personalizada
console.table(filtraPrimeros5(estudiantes));

// Filtrar a los estudiantes cuyo nombre tenga más de 15 caracteres
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length > 15);
console.table(nuevoEstudiantesNombre);

// Intento de modificar el arreglo inmutable (no tendrá efecto debido a Object.freeze)
/*estudiantes.pop()
console.table(estudiantes)*/

// Intento de modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Adrian");
console.table(nuevoEstudiantes);

// Definición de una función que filtra los primeros 5 elementos de un arreglo
function filtraPrimeros5(arregloEstudiantes){
    let listaFiltrada = [];
    for(let i = 0; i < 5; i++){
        listaFiltrada.push(arregloEstudiantes[i]);
    }
    return listaFiltrada;
}

// Filtrado de datos y transformación de los mismos utilizando el método MAP
console.log("%c12.- Filtrado de Elemento dentro de un arreglo utilizando el método MAP, en el que necesitamos transformarlos", style_console);

// Imprime los elementos actuales de signosZodiacales
console.log("Imprimimos los elementos actuales de signosZodiacales:");
console.log(signosZodiacales);

// Utiliza 'map' para transformar cada elemento del arreglo a mayúsculas
console.table(signosZodiacales.map(signoZodiacal => signoZodiacal.toUpperCase()));

// Reducción de elementos de un arreglo utilizando el método REDUCE
// Se usa para realizar operaciones matemáticas o cuantitativas, como obtener totales
const costosListaCompras = [15, 52.50, 16.90, 32.50, 28, 105, 45.2, 94.10];

// Imprime los precios actuales en la lista de compras
console.log("Los precios son: ");
console.table(costosListaCompras);

// Calcula el total de la compra sumando todos los elementos del arreglo
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio) => total + precio, 0).toFixed(2)}`);
