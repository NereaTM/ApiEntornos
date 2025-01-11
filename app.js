const express = require('express');
const app = express();
const path = require('path');

// Rutas de los otros .js
const departamentosRutas = require('./rutas/departamentos');

// Predefinir en json
app.use(express.json()); 

// Usar rutas de .js
app.use('/departamentos', departamentosRutas);

// Configuracion en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
