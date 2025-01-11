const sqlite3 = require('sqlite3').verbose();

// Crear conexion a la bd
const bd_entornos = new sqlite3.Database('./AABaseDatos_Entornos.db', (err) => {
  if (err) {
    console.error('Error al conectar', err.message);
  } else {
    console.log('Conectado');
  }
});

module.exports = bd_entornos;