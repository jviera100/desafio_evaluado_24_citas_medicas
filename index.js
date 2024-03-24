const axios = require('axios');
const uuid = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const chalk = require('chalk');
const express = require('express');
moment.locale('es');

const app = express();
const PORT = 3001;

// Array para almacenar usuarios
let users = [];

// Función para registrar usuarios desde la API Random User
async function registerUsersFromAPI(numUsers) {
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${numUsers}`);
        const results = response.data.results;
        results.forEach(result => {
            const user = {
                id: uuid.v4(),
                firstName: result.name.first,
                lastName: result.name.last,
                gender: result.gender,
                timestamp: moment().format('DD-MM-YYYY HH:mm:ss')
            };
            users.push(user);
        });
        console.log('Usuarios registrados desde la API:', users);
    } catch (error) {
        console.error('Error al registrar usuarios desde la API:', error);
    }
}

// Llamar a la función para registrar usuarios desde la API Random User
registerUsersFromAPI(10); // Registrar 10 usuarios aleatorios
//-------------------------------------------------------------------------
// Middleware para imprimir lista de usuarios en la consola con Chalk
function logUsers(req, res, next) { 
  console.log(chalk.underline.bgWhiteBright.blue.bold.italic('Lista de usuarios registrados:'));
  console.log(users);
  next();
}

// Aplicar middleware globalmente para todas las solicitudes
app.use(logUsers);

// Ruta para consultar usuarios registrados
app.get('/users', (req, res) => {
  // Dividir usuarios por sexo usando Lodash
  const females = _.filter(users, { gender: 'female' });
  const males = _.filter(users, { gender: 'male' });
  const groupedUsers = { females, males };
  res.json(groupedUsers);
});

// Iniciar el servidor con Nodemon
app.listen(PORT, () => { 
  console.log(chalk.underline.bgWhiteBright.blue.bold.italic(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${PORT}`));
});