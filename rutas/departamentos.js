const express = require('express');
const rutas = express.Router();
const bd_entornos = require('../bd/bd');

// Crear un departamento POST=CREAR
rutas.post('/', (req, res) => {
  const { nombre, descripcion, imagen } = req.body;

  // Validar que los datos NOT NULL
  if (!nombre) {
    return res.status(400).json({ message: 'Faltan datos requeridos: nombre' });
  }

  // Preparar la consulta para insertar el nuevo departamento
  const query = `
    INSERT INTO DEPARTAMENTOS (nombre, descripcion, imagen)
    VALUES (?, ?, ?)
  `;

  // Ejecutar la consulta SQL pasandole los parametros [] y le asigna el ID automaticamente
  bd_entornos.run(query, [nombre, descripcion, imagen], function(err) {
    if (err) {
      console.log(query)
      return res.status(500).json({ message: 'Error al crear el departamento', error: err.message });
    }

    // Confirmación ID
    res.status(201).json({ message: 'Datos actualizados'});
  });
});

// Consultar todos los departamentos GET=LISTAR
rutas.get('/', (req, res) => {
  const query = 'SELECT * FROM DEPARTAMENTOS';

  bd_entornos.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Error al consultar los departamentos', error: err.message });
    }

    res.status(200).json(rows); // Devuelve todos los departamentos como un array JSON
  });
});

// Ruta para obtener un departamento por ID (GET)
rutas.get('/:id', (req, res) => {
  const id = req.params.id;

  // Consulta para obtener un departamento por su ID
  const query = 'SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ?';

  // Ejecutar la consulta con el ID como parámetro
  bd_entornos.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener el departamento', error: err.message });
    }

    if (!row) {
      return res.status(404).json({ message: 'Departamento no encontrado' });
    }

    // Devolver los datos del departamento
    res.status(200).json(row);
  });
});

// Actualizar un departamento por ID PUT=MODIFICAR
rutas.put('/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, imagen } = req.body;

  // Validar que los datos NOT NULL
  if (!nombre) {
    return res.status(400).json({ message: 'Faltan datos requeridos: nombre' });
  }

  // Consulta para actualizar los datos
  const query = `
    UPDATE DEPARTAMENTOS 
    SET nombre = ?, descripcion = ?, imagen = ? 
    WHERE id_departamento = ?
  `;

  // Ejecutar la consulta pasandole los parametros []
  bd_entornos.run(query, [nombre, descripcion, imagen, id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar', error: err.message });
    }

    // Responder con un mensaje de exito
    res.status(200).json({ message: 'Datos actualizados' });
  });
});

// Eliminar un departamento por ID DELETE=ELIMINAR
rutas.delete('/:id', (req, res) => {
  const id = req.params.id;

  // Eliminar departamento por ID
  const query = 'DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?';

  // Ejecutar la consulta
  bd_entornos.run(query, [id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar', error: err.message });
    }

    // Finalizo correctamente
    res.status(200).json({ message: 'Departamento eliminado' });
  });
});

module.exports = rutas;