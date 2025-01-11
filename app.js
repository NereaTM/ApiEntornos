const express = require('express');
const app = express();
const path = require('path');

// Predefinir en json
app.use(express.json()); 

// Configuracion en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
