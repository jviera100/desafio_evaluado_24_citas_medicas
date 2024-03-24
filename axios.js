const axios = require('axios');
const chalk = require('chalk');
//----------------------------------------------------------------------
//--consulta total de personajes en la API--
//----------------------------------------------------------------------
axios.get("https://rickandmortyapi.com/api/character")
  .then(response => {
    const totalPersonajes = response.data.info.count;
    console.log(chalk.underline.bgYellowBright.bold.italic(JSON.stringify(`Total de personajes en la API: ${totalPersonajes}`)));
  })
  .catch(error => console.error(chalk.underline.bgYellowBright.bold.italic(JSON.stringify(error))));
//----------------------------------------------------------------------
//--consulta de personaje ID 1--
//----------------------------------------------------------------------
axios.get("https://rickandmortyapi.com/api/character/1")
    .then(data => {
        const name = data.data.name;
        console.log(chalk.underline.bgCyanBright.bold.italic(JSON.stringify(name)));

    }).catch(error => console.log(chalk.underline.bgCyanBright.bold.italic(JSON.stringify(error))));
//--------------------------------------------------------------------
//--consulta de personajes por rango de personajes--
//--------------------------------------------------------------------
axios.get(`https://rickandmortyapi.com/api/character/${Array.from({length: 2}, (_, i) => i + 700).join(',')}`) 
  .then(response => {                             //length = cantidad de personajes //700 = primer personaje
    // Procesa y muestra los datos de los personajes
    response.data.forEach(personaje => {
      console.log(chalk.underline.bgMagentaBright.bold.italic(personaje.name));
    });
  })
  .catch(error => console.log(chalk.underline.bgMagentaBright.bold.italic(error)));