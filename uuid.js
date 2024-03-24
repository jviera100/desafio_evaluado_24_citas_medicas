const chalk = require('chalk');
const { v4: uuidv4 } = require("uuid"); //version 4 uuid
const datenow = require("./helper/datenow") //import funcion en modulo

console.log(uuidv4())//muestra 36 caracteres, se generan consultas sin repetir ID
//colores solo a string y a todo
console.log(chalk.underline.bgBlueBright.bold.italic("UUID 36 caracteres: ") + uuidv4())
console.log(chalk.underline.bgBlueBright.bold.italic("UUID 36 caracteres: " + uuidv4()));

const primeros4 = uuidv4().slice(0,4) //muestra primeros 4 caracteres, se generan consultas sin repetir ID
const ultimos4 = uuidv4().slice(32,36)//muestra ultimos 4 caracteres => desde, hasta

console.log("id: ", primeros4)
console.log("id: ", ultimos4)
//colores solo a string y a todo
console.log(chalk.underline.bgGreenBright.bold.italic("UUID 4 caracteres: ") + "id: ", ultimos4)
console.log(chalk.underline.bgGreenBright.bold.italic("UUID 4 caracteres: " + "id: ", ultimos4))

const persona = {
    id: datenow(), //invocando funcion importada de modulo
    name: "hernan",
    age: 27
}
//sin color
console.log(persona)
//colores a cada propiedad
console.log(chalk.underline.bgRedBright.bold.italic(`id: ${persona.id}`));
console.log(chalk.underline.bgRedBright.bold.italic(`name: ${persona.name}`));
console.log(chalk.underline.bgRedBright.bold.italic(`age: ${persona.age}`));
//color array
console.log(chalk.underline.bgRedBright.bold.italic(JSON.stringify(persona, null, 2)));

/* 
Ejercicio 1: (dos parametros, espero uuid pase como parametro) => no recomendable
Crea una función que genere un UUID (v4) para cada usuario registrado.
Almacena los UUIDs generados junto con otros datos del usuario (como nombre, correo electrónico, etc.).
JavaScript
*/

const usuarios = [];
/*
function registrarUsuarios(name, email) {
    const newUser = {
        id: uuidv4().slice(24, 36),  //id serial ultimos 12 caracateres
        name,                        //propiedad name sin valor
        email                        //propiedades email sin valor
    };
    usuarios.push(newUser); //insertar propiedades de un array a otro array vacio
    return newUser;
}

const usuario1 = registrarUsuarios("Rodrigo", "rodrigo@gmail.com"); //instanciar agregando valor name y email
const usuario2 = registrarUsuarios("Samuel", "samuel@gmail.com"); //instanciar agregando valor name y email

console.log('Usuarios registrados'); //muestra string
console.log(usuario1);              //muestra array
console.log(usuario2);             //muestra array
*/
/* 
Ejercicio 2: (tres parametros) => generando uuid => si recomendable
Crea una función que genere un UUID (v4) para cada usuario registrado.
Almacena los UUIDs generados junto con otros datos del usuario (como nombre, correo electrónico, etc.).
JavaScript
*/
function registrarUsuarios(id, name, email) {
  const newUser = {
    id,
    name,
    email,
  };
  usuarios.push(newUser);
  return newUser;
}

const usuario3 = registrarUsuarios(uuidv4().slice(24, 36), "Jessica", "jessica@gmail.com");
const usuario4 = registrarUsuarios(uuidv4().slice(24, 36), "Carlos", "carlos@gmail.com");

console.log("Usuarios registrados"); //muestra string
console.log('----------------')     //muestra string
console.log(usuario3);             //muestra array
console.log(chalk.underline.bgYellowBright.bold.italic(JSON.stringify(usuario4)));            //muestra array

/*
Date.now(): Esto devuelve el número de milisegundos transcurridos desde la medianoche del 1 de enero de 1970 (conocido como el “epoch” o “época”) hasta el momento actual. Básicamente, es un timestamp que representa la fecha y hora actual.
=> no es recomendable para generar valores unicos
Los valores devueltos por Date.now() son únicos solo en el contexto de un único proceso si se generan en momentos diferentes. Sin embargo, si dos procesos generan un valor Date.now() al mismo tiempo, podrían obtener el mismo valor, lo que no garantiza unicidad entre sistemas o procesos1.
date.now puede repetirse si hay mas de un proceso asincronico ejecutandose al mismo tiempo
.toString(36): Aquí estamos convirtiendo ese timestamp en una cadena de texto. El argumento 36 indica que queremos representar el número en base 36. En base 36, los dígitos van desde 0 hasta 9 y luego de la ‘a’ a la ‘z’.
.slice(2): Finalmente, tomamos una subcadena de la cadena resultante. El índice 2 indica que queremos eliminar los primeros dos caracteres de la cadena. Esto se hace para eliminar el prefijo “0o” que se agrega automáticamente cuando convertimos a base 36.
En resumen, la expresión Date.now().toString(36).slice(2) nos da una cadena que representa el timestamp actual en base 36, sin el prefijo “0o”. Por ejemplo, si ejecutamos esta línea de código ahora mismo, obtendríamos algo como "1krs6j".

-------------------------
La época Unix es una fecha concreta a partir de la cual se cuentan los segundos, lo que da como resultado una nueva medida de tiempo. Esta medida se utiliza en sistemas operativos como Unix o Linux, así como en algunos lenguajes de programación como PHP. El tiempo en estos sistemas operativos se mide en segundos desde el 1 de enero de 1970, a las cero horas (medianoche UTC/GMT) 1.

Literalmente hablando, el epoch es el Unix time 0, que corresponde a la medianoche del 1 de enero de 1970. Sin embargo, el término “epoch” a menudo se utiliza como sinónimo de Unix time.

Este sistema de medición es ampliamente utilizado en programación y sistemas informáticos para representar fechas y horas de manera uniforme. Por ejemplo, cuando ves un timestamp en un archivo o en una base de datos, es probable que esté basado en la época Unix.


*/