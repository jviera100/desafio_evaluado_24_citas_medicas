const moment = require('moment');
const chalk = require('chalk');
const Table = require('cli-table3');
const {v4: uuidv4} = require('uuid');
moment.locale('es');                     // idioma fecha
//---------------------------------------------------------------------------
//----consultas----
//---------------------------------------------------------------------------
const hoy = moment()
const formato = 'dddd Do MMMM YYYY' 
const ayer = moment().subtract(1, 'days') //quita 1 dia
const manana = moment().add(1, 'days')    //suma 1 dia
const fechaDiezDias = moment().add(10, 'days')
const fechaUnMes = moment().add(1, 'month')
const fechaExacta = moment('2022-01-01')
const diasXmes = moment().daysInMonth()   //cuantos dias tiene mes actual = marzo
const diasmes = moment([2022, 0]).daysInMonth() //cuantos dias tiene mes 0 = enero

console.log(chalk.underline.bgYellowBright.bold.italic(JSON.stringify(hoy, null, 2))); //muestra objeto (hoy)
//----------------------------------------------
//--colores invocando parametros con funcion--
//----------------------------------------------
// Función para imprimir con colores
function imprimirConColores(nombre, valor) {
  console.log(chalk.underline.bgBlueBright.bold.italic(`${nombre}: ${valor}`));
}

// Imprimir cada fecha con colores
imprimirConColores('Hoy', hoy.format(formato));
imprimirConColores('Ayer', ayer.format(formato));
imprimirConColores('Mañana', manana.format(formato));
imprimirConColores('Fecha Diez Días', fechaDiezDias.format(formato));
imprimirConColores('Fecha Un Mes', fechaUnMes.format(formato));
imprimirConColores('Fecha Exacta', fechaExacta.format(formato));
imprimirConColores('Días por Mes', diasXmes.toString());
imprimirConColores('Días en Enero', diasmes.toString());
//----------------------------------------------
//variables a tabla
//----------------------------------------------
console.table({
    hoy: hoy.format(formato),
    ayer: ayer.format(formato),
    manana: manana.format(formato),
    fechaDiezDias: fechaDiezDias.format(formato),
    fechaUnMes: fechaUnMes.format(formato),
    fechaExacta: fechaExacta.format(formato),
    diasXmes,
    diasmes
})
//----------------------------------------------
// Creación de la tabla con cli-table3
//----------------------------------------------
let table = new Table({
  head: ['Fecha', 'Evento'].map(header => chalk.blue(header)),
  style: { border: [], header: [] }
});
 

// Añadir filas a la tabla
// Añadir filas a la tabla con colores
table.push(
  [chalk.green('Hoy'), chalk.green(hoy.format(formato))],
  [chalk.yellow('Ayer'), chalk.yellow(ayer.format(formato))],
  [chalk.cyan('Mañana'), chalk.cyan(manana.format(formato))],
  [chalk.magenta('Fecha Diez Días'), chalk.magenta(fechaDiezDias.format(formato))],
  [chalk.red('Fecha Un Mes'), chalk.red(fechaUnMes.format(formato))],
  [chalk.blue('Fecha Exacta'), chalk.blue(fechaExacta.format(formato))],
  [chalk.white('Días por Mes'), chalk.white(diasXmes.toString())],
  [chalk.gray('Días en Enero'), chalk.gray(diasmes.toString())]
);

// Imprimir la tabla
console.log(table.toString());
//------------------------------------------------
//----agregando 10 mil dias----
//------------------------------------------------
const consulta = {
  // Paso 3
  fecha: moment().add(10000, "days").format("MMM Do YYYY"),
  // Paso 4
  ID: uuidv4(),
};

console.log(chalk.underline.bgRedBright.bold.italic(JSON.stringify(consulta, null, 2))); //muestra objeto (consulta)
