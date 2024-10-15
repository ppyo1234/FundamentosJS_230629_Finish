// Ejercicio 01 : Declaración de variables 

// Declaración de una variable 'miNombre' y asignación de un valor de tipo cadena de texto
var miNombre = "José Arturo ";

// Declaración de una variable 'misApellidos' sin asignar un valor inicialmente
var misApellidos ;

// Declaración de una variable 'miEdad' y asignación de un valor numérico
var miEdad = 19;


// Asignación de un valor a la variable 'misApellidos'
misApellidos = "García González";

// El objeto de consola nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método

// Imprime en la consola el mensaje junto con la concatenación de 'miNombre' y 'misApellidos'
console.log ("Intentando leer las variables = ",miNombre+misApellidos);

// Una variable puede cambiar en el proceso de ejecución del programa 


// Muestra una advertencia en la consola indicando el inicio de la declaración de constantes
console.warn ("---- Declaración de variables del tipo constante usando : cnst ");

// Declaración de una constante 'miUniversidad' y asignación de un valor de tipo cadena de texto
const miUniversidad = "UT Xicotepec";

// Declaración de una constante 'miMatricula' y asignación de un valor numérico
const miMatricula = 230629;

// Imprime en la consola un saludo personalizado utilizando las variables y constantes declaradas
console.log ("Hola, ",miNombre," ",misApellidos," se que estudias actualmente en : ", miUniversidad , " asignamos la matricula ",miMatricula," y tu edad es ",miEdad);


// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función TupeOff()

// Imprime un mensaje indicando que se analizarán los tipos de datos de las variables
console.log ("Analizando los datos puedo decir que: ");

// Imprime el tipo de dato de 'miNombre' utilizando typeof
console.log ("miNombre es del tipo ",typeof(miNombre));

// Imprime el tipo de dato de 'misApellidos' utilizando typeof
console.log ("misApellidos es del tipo ",typeof(misApellidos));

// Imprime el tipo de dato de 'miUniversidad' utilizando typeof
console.log ("miUniversidad es del tipo ",typeof(miUniversidad));

// Imprime el tipo de dato de 'miMatricula' utilizando typeof
console.log ("miMatricula es del tipo ",typeof(miMatricula));

