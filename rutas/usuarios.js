const express = require('express');
const router = express.Router();
const db = require('../bd/bd');

// Crear un nuevo usuario
router.post('/', (req, res) => {
    const { usuario, contraseña } = req.body;
    const query = 'INSERT INTO USUARIOS (usuario, contraseña) VALUES (?, ?)';
    db.run(query, [usuario, contraseña], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: this.lastID, usuario, contraseña });
        }
    });
});

module.exports = router;
