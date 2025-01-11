const express = require('express');
const rutas = express.Router();
const db = require('../bd/bd'); 

// Ruta para manejar el inicio de sesión
rutas.post('/', (req, res) => {
  const { usuario, contraseña } = req.body;

  const query = 'SELECT * FROM USUARIOS WHERE usuario = ? AND contraseña = ?';
  
  db.get(query, [usuario, contraseña], (err, row) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
    
    if (row) {
      res.json({ success: true, message: 'Inicio de sesion' });
    } else {
      res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
    }
  });
});

module.exports = rutas;