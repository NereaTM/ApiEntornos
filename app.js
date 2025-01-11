const express = require('express');
const app = express();
const path = require('path');

// Rutas de los otros .js
const departamentosRutas = require('./rutas/departamentos');
const empleadosRutas = require('./rutas/empleados');
const usuariosRutas = require('./rutas/usuarios');
const loginRutas = require('./rutas/login'); 

// Predefinir en json
app.use(express.json()); 

// Usar rutas de .js
app.use('/departamentos', departamentosRutas);
app.use('/empleados', empleadosRutas);
app.use('/usuarios', usuariosRutas);
app.use('/login', loginRutas); 

// Sirve la carpeta public
app.use(express.static(path.join(__dirname, 'web')));

// Configuracion en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
