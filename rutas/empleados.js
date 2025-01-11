//200 OK
//201 CREADO
//400 FALTAN DATOS
//404 NOT FOUND
//500 ERROR DESCONOCIDO

const express = require('express');
const rutas = express.Router();
const bd_entornos = require('../bd/bd');

// Crear un empleado POST=CREAR
rutas.post('/', (req, res) => {
  const { nombre, dni, id_departamento, telefono, email } = req.body;

  // Validar que los datos NOT NULL
  if (!nombre || !dni || !id_departamento) {
    return res.status(400).json({ message: 'Faltan datos requeridos: nombre, dni, id_departamento' });
  }

  // Preparar la consulta para insertar el nuevo empleado
  const query = `
    INSERT INTO EMPLEADOS (nombre, dni, id_departamento, telefono, email)
    VALUES (?, ?, ?, ?, ?)
  `;

  // Ejecutar la consulta SQL pasandole los parametros [] y le asigna el ID automaticamente
  bd_entornos.run(query, [nombre, dni, id_departamento, telefono, email], function(err) {
    if (err) {
      console.log(query)
      return res.status(500).json({ message: 'Error al crear el empleado', error: err.message });
    }

    // Confirmación ID
    res.status(201).json({ message: 'Datos actualizados'});
  });
});

// Consultar todos los empleados GET=LISTAR
rutas.get('/', (req, res) => {
  const query = 'SELECT * FROM EMPLEADOS';

  bd_entornos.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Error al listar empleados', error: err.message });
    }

    res.status(200).json(rows);
  });
});

// Obtener un empleado por ID GET=CONSULTAR UNO
rutas.get('/:id', (req, res) => {
  const id = req.params.id;

  // Consulta para obtener un empleado por su ID
  const query = 'SELECT * FROM EMPLEADOS WHERE id_empleado = ?';

  // Ejecutar la consulta con el ID como parámetro
  bd_entornos.get(query, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener el empleado', error: err.message });
    }

    if (!row) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    // Devolver los datos del empleado
    res.status(200).json(row);
  });
});

// Actualizar un empleado por ID PUT=MODIFICAR
rutas.put('/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, dni, id_departamento, telefono, email } = req.body;

  // Validar que los datos NOT NULL
  if (!nombre || !dni || !id_departamento) {
    return res.status(400).json({ message: 'Faltan datos requeridos: nombre, dni, id_departamento' });
  }

  // Consulta para actualizar los datos
  const query = `
    UPDATE EMPLEADOS 
    SET nombre = ?, dni = ?, id_departamento = ?, telefono = ?, email = ? 
    WHERE id_empleado = ?
  `;

  // Ejecutar la consulta pasandole los parametros []
  bd_entornos.run(query, [nombre, dni, id_departamento, telefono, email, id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar', error: err.message });
    }

    // Responder con un mensaje de exito
    res.status(200).json({ message: 'Datos actualizados' });
  });
});

// Eliminar un empleado por ID DELETE=ELIMINAR
rutas.delete('/:id', (req, res) => {
  const id = req.params.id;

  // Eliminar empleado por ID
  const query = 'DELETE FROM EMPLEADOS WHERE id_empleado = ?';

  // Ejecutar la consulta
  bd_entornos.run(query, [id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar', error: err.message });
    }

    // Finalizo correctamente
    res.status(200).json({ message: 'Empleado eliminado' });
  });
});

module.exports = rutas;