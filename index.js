const axios = require('axios');
const uuid = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const chalk = require('chalk');
const express = require('express');
moment.locale('es'); // idioma fecha

const app = express();
const PORT = 3001;

let users = [];

// Función para registrar un usuario desde la API Random User
async function registerUserFromAPI() {
  try {
    const response = await axios.get(`https://randomuser.me/api/`);
    const result = response.data.results[0];
    const user = {
      id: uuid.v4(),
      firstName: result.name.first,
      lastName: result.name.last,
      gender: result.gender,
      timestamp: moment().format('DD-MM-YYYY HH:mm:ss')
    };
    users.push(user);
    console.log(chalk.underline.bgWhiteBright.blue.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
  } catch (error) {
    console.error(chalk.underline.bgWhiteBright.blue.bold.italic(JSON.stringify({ message: 'Error al registrar usuario desde la API:', error}, null, 2)));
  }
}         
// Ruta para consultar usuarios registrados
app.get('/users', (req, res) => {
  try {
    const females = _.filter(users, { gender: 'female' });
    const males = _.filter(users, { gender: 'male' });
    const groupedUsers = { females, males };
    res.json(groupedUsers);
    console.log(chalk.underline.bgWhiteBright.blue.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
  } catch (error) {
    console.error(chalk.underline.bgWhiteBright.blue.bold.italic(JSON.stringify({ message: 'Error al registrar usuario desde la API:', error}, null, 2)));    res.status(500).json({ error: 'Error al consultar usuarios desde la API' });
  }
});

// Middleware para imprimir lista de usuarios en la consola con Chalk
function logUsers(req, res, next) { 
  console.log(chalk.underline.bgWhiteBright.blue.bold.italic(JSON.stringify({ message: 'Usuarios registrados desde la API:', users }, null, 2)));
  next();
}

// Aplicar middleware globalmente para todas las solicitudes
app.use(logUsers);

// Programar la llamada a la función para registrar usuarios desde la API Random User
setInterval(registerUserFromAPI, 5000); // Registrar 1 usuario aleatorio cada 5 segundos

// Iniciar el servidor con Nodemon
app.listen(PORT, () => { 
  console.log(chalk.bgWhiteBright.blue.bold.italic(`🔥🔥🔥🔥🔥 Servidor corriendo en el puerto http://localhost:${PORT}`));
});