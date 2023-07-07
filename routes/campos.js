// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Ruta para obtener todos los ucampos
router.get('/', (req, res) => {
  connection.query('SELECT * FROM campos', (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(results);
  });
});

// Ruta para insertar campos
router.post('/', (req, res) => {
    const campo = req.body; // Obtener el objeto campo desde el body de la solicitud
  
    connection.query('INSERT INTO campos SET ?', campo, (error, results) => {
      if (error) {
        console.error('Error al insertar el campo: ' + error.stack);
        res.status(500).json({ error: 'Error al insertar el campo' });
        return;
      }
      res.json(results);
    });
  });


// Ruta para eliminar campos

router.delete('/:id', (req, res) => {
    const campoId = req.params.id; // Obtener el ID del campo desde los parámetros de la URL
  
    connection.query('DELETE FROM campos WHERE id_campos = ?', campoId, (error, results) => {
      if (error) {
        console.error('Error al eliminar el campo: ' + error.stack);
        res.status(500).json({ error: 'Error al eliminar el campo' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para obtener un campo por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM campos WHERE id_campos = ?', [id], (error, results) => {
      if (error) {
        console.error('Error al obtener el campo: ' + error.stack);
        res.status(500).json({ error: 'Error al obtener el campo' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      res.json(results[0]);
    });
  });


module.exports = router;
