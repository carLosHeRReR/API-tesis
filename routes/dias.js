// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Ruta para obtener todos los dias
router.get('/', (req, res) => {
  connection.query('SELECT * FROM dias', (error, results) => {
    if (error) {
      console.error('Error al obtener los usuarios: ' + error.stack);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(results);
  });
});

// Ruta para insertar dias
router.post('/', (req, res) => {
    const dia = req.body; // Obtener el objeto campo desde el body de la solicitud
  
    connection.query('INSERT INTO dias SET ?', dia, (error, results) => {
      if (error) {
        console.error('Error al insertar el día: ' + error.stack);
        res.status(500).json({ error: 'Error al insertar el día' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para eliminar los días

  router.delete('/:id', (req, res) => {
    const diaId = req.params.id; // Obtener el ID del campo desde los parámetros de la URL
  
    connection.query('DELETE FROM dias WHERE id_dias = ?', diaId, (error, results) => {
      if (error) {
        console.error('Error al eliminar el día: ' + error.stack);
        res.status(500).json({ error: 'Error al eliminar el día' });
        return;
      }
      res.json(results);
    });
  });

  // Ruta para obtener un día por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM dias WHERE id_dias = ?', [id], (error, results) => {
      if (error) {
        console.error('Error al obtener el campo: ' + error.stack);
        res.status(500).json({ error: 'Error al obtener el dia' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Día no encontrado' });
        return;
      }
      res.json(results[0]);
    });
  });



module.exports = router;
